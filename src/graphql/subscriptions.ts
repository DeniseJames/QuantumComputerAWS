/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateContactForm = /* GraphQL */ `subscription OnCreateContactForm(
  $email: String
  $name: String
  $comment: String
) {
  onCreateContactForm(email: $email, name: $name, comment: $comment) {
    email
    name
    comment
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateContactFormSubscriptionVariables,
  APITypes.OnCreateContactFormSubscription
>;
export const onUpdateContactForm = /* GraphQL */ `subscription OnUpdateContactForm(
  $email: String
  $name: String
  $comment: String
) {
  onUpdateContactForm(email: $email, name: $name, comment: $comment) {
    email
    name
    comment
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateContactFormSubscriptionVariables,
  APITypes.OnUpdateContactFormSubscription
>;
export const onDeleteContactForm = /* GraphQL */ `subscription OnDeleteContactForm(
  $email: String
  $name: String
  $comment: String
) {
  onDeleteContactForm(email: $email, name: $name, comment: $comment) {
    email
    name
    comment
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteContactFormSubscriptionVariables,
  APITypes.OnDeleteContactFormSubscription
>;
