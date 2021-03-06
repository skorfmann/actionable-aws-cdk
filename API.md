# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### ActionableAwsRole <a name="actionable-aws-cdk.ActionableAwsRole"></a>

#### Initializers <a name="actionable-aws-cdk.ActionableAwsRole.Initializer"></a>

```typescript
import { ActionableAwsRole } from 'actionable-aws-cdk'

new ActionableAwsRole(scope: Construct, id: string, props: ActionableAwsProps)
```

##### `scope`<sup>Required</sup> <a name="actionable-aws-cdk.ActionableAwsRole.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="actionable-aws-cdk.ActionableAwsRole.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="actionable-aws-cdk.ActionableAwsRole.parameter.props"></a>

- *Type:* [`actionable-aws-cdk.ActionableAwsProps`](#actionable-aws-cdk.ActionableAwsProps)

---



#### Properties <a name="Properties"></a>

##### `oidcProvider`<sup>Required</sup> <a name="actionable-aws-cdk.ActionableAwsRole.property.oidcProvider"></a>

```typescript
public readonly oidcProvider: OpenIdConnectProvider;
```

- *Type:* [`@aws-cdk/aws-iam.OpenIdConnectProvider`](#@aws-cdk/aws-iam.OpenIdConnectProvider)

---

##### `role`<sup>Required</sup> <a name="actionable-aws-cdk.ActionableAwsRole.property.role"></a>

```typescript
public readonly role: Role;
```

- *Type:* [`@aws-cdk/aws-iam.Role`](#@aws-cdk/aws-iam.Role)

---


## Structs <a name="Structs"></a>

### ActionableAwsProps <a name="actionable-aws-cdk.ActionableAwsProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ActionableAwsProps } from 'actionable-aws-cdk'

const actionableAwsProps: ActionableAwsProps = { ... }
```

##### `repoName`<sup>Required</sup> <a name="actionable-aws-cdk.ActionableAwsProps.property.repoName"></a>

```typescript
public readonly repoName: string;
```

- *Type:* `string`

e.g. limit to 'myuser/repo' or 'myorg/*'.

---

##### `gitScope`<sup>Optional</sup> <a name="actionable-aws-cdk.ActionableAwsProps.property.gitScope"></a>

```typescript
public readonly gitScope: string;
```

- *Type:* `string`

e.g. limit to 'main' branch with 'ref:refs/heads/main' Defaults to * which matches all branches in the given repo.

---

##### `thumbPrint`<sup>Optional</sup> <a name="actionable-aws-cdk.ActionableAwsProps.property.thumbPrint"></a>

```typescript
public readonly thumbPrint: string;
```

- *Type:* `string`

How to verify and get a new thumbPrint is described here https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc_verify-thumbprint.html.

Defaults to 'a031c46782e6e6c662c2c87c76da9aa62ccabd8e'

---



