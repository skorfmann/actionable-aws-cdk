const { AwsCdkConstructLibrary } = require('projen');
const project = new AwsCdkConstructLibrary({
  author: 'Sebastian Korfmann',
  authorAddress: 'sebastian@korfmann.net',
  cdkVersion: '1.95.2',
  defaultReleaseBranch: 'main',
  name: 'actionable-aws-cdk',
  repositoryUrl: 'https://github.com/sebastian/actionable-aws-cdk.git',
  cdkDependencies: ['@aws-cdk/aws-iam'],
  // cdkTestDependencies: undefined,  /* AWS CDK modules required for testing. */
  // deps: [],                        /* Runtime dependencies of this module. */
  // description: undefined,          /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                     /* Build dependencies for this module. */
  // packageName: undefined,          /* The "name" in package.json. */
  // release: undefined,              /* Add release management to this project. */
});
project.synth();