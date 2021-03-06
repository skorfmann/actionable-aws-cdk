import * as iam from '@aws-cdk/aws-iam';
import * as cdk from '@aws-cdk/core';

const ACTIONS_TOKEN_URL = 'https://vstoken.actions.githubusercontent.com';
export interface ActionableAwsProps {
  /**
   * e.g. limit to 'myuser/repo' or 'myorg/*'
   *
   * @stability stable
   */
  readonly repoName: string;

  /**
   * e.g. limit to 'main' branch with 'ref:refs/heads/main'
   * Defaults to * which matches all branches in the given repo
   *
   * @stability stable
   */
  readonly gitScope?: string;

  /**
   * How to verify and get a new thumbPrint is described here
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc_verify-thumbprint.html
   *
   * Defaults to 'a031c46782e6e6c662c2c87c76da9aa62ccabd8e'
   *
   * @stability stable
   */
  readonly thumbPrint?: string;
}
export class ActionableAwsRole extends cdk.Construct {
  public readonly role: iam.Role;
  public readonly oidcProvider: iam.OpenIdConnectProvider;

  constructor(scope: cdk.Construct, id: string, props: ActionableAwsProps) {
    super(scope, id);

    // How to verify and get a new thumbPrint is described here
    // https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc_verify-thumbprint.html
    const { repoName, thumbPrint = 'a031c46782e6e6c662c2c87c76da9aa62ccabd8e', gitScope = '*' } = props;

    this.oidcProvider = new iam.OpenIdConnectProvider(this, 'provider', {
      url: ACTIONS_TOKEN_URL,
      clientIds: ['sigstore'],
      thumbprints: [thumbPrint],
    });

    this.role = new iam.Role(this, 'Role', {
      assumedBy: new iam.WebIdentityPrincipal(this.oidcProvider.openIdConnectProviderArn,
        {
          StringLike: {
            'vstoken.actions.githubusercontent.com:sub': `repo:${repoName}:${gitScope}`,
          },
        },
      ),
    });
  }
}