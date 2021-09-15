import * as iam from '@aws-cdk/aws-iam';
import { Construct } from 'constructs';

const ACTIONS_TOKEN_URL = 'https://vstoken.actions.githubusercontent.com';
export interface ActionableAwsProps {
  readonly repoName: string;
  readonly gitScope: string;
  readonly thumbPrint: string;
}
export class ActionableAwsRole extends Construct {
  public readonly role: iam.Role;
  public readonly oidcProvider: iam.OpenIdConnectProvider;

  constructor(scope: Construct, id: string, props: ActionableAwsProps) {
    super(scope, id);

    const { repoName, thumbPrint, gitScope = '*' } = props;

    this.oidcProvider = new iam.OpenIdConnectProvider(this, 'provider', {
      url: ACTIONS_TOKEN_URL,
      clientIds: ['sigstore'],
      thumbprints: [thumbPrint],
    });

    this.role = new iam.Role(this, 'Role', {
      assumedBy: new iam.WebIdentityPrincipal(this.oidcProvider.openIdConnectProviderArn,
        { StringLike: `vstoken.actions.githubusercontent.com:sub: repo${repoName}:${gitScope}` }),
    });
  }
}