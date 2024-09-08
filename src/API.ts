/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateContactFormInput = {
  email: string,
  name?: string | null,
  comment?: string | null,
};

export type ContactForm = {
  __typename: "ContactForm",
  email: string,
  name?: string | null,
  comment?: string | null,
};

export type UpdateContactFormInput = {
  email: string,
  name?: string | null,
  comment?: string | null,
};

export type DeleteContactFormInput = {
  email: string,
};

export type TableContactFormFilterInput = {
  email?: TableStringFilterInput | null,
  name?: TableStringFilterInput | null,
  comment?: TableStringFilterInput | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ContactFormConnection = {
  __typename: "ContactFormConnection",
  items?:  Array<ContactForm | null > | null,
  nextToken?: string | null,
};

export type CreateContactFormMutationVariables = {
  input: CreateContactFormInput,
};

export type CreateContactFormMutation = {
  createContactForm?:  {
    __typename: "ContactForm",
    email: string,
    name?: string | null,
    comment?: string | null,
  } | null,
};

export type UpdateContactFormMutationVariables = {
  input: UpdateContactFormInput,
};

export type UpdateContactFormMutation = {
  updateContactForm?:  {
    __typename: "ContactForm",
    email: string,
    name?: string | null,
    comment?: string | null,
  } | null,
};

export type DeleteContactFormMutationVariables = {
  input: DeleteContactFormInput,
};

export type DeleteContactFormMutation = {
  deleteContactForm?:  {
    __typename: "ContactForm",
    email: string,
    name?: string | null,
    comment?: string | null,
  } | null,
};

export type GetContactFormQueryVariables = {
  email: string,
};

export type GetContactFormQuery = {
  getContactForm?:  {
    __typename: "ContactForm",
    email: string,
    name?: string | null,
    comment?: string | null,
  } | null,
};

export type ListContactFormsQueryVariables = {
  filter?: TableContactFormFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContactFormsQuery = {
  listContactForms?:  {
    __typename: "ContactFormConnection",
    items?:  Array< {
      __typename: "ContactForm",
      email: string,
      name?: string | null,
      comment?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateContactFormSubscriptionVariables = {
  email?: string | null,
  name?: string | null,
  comment?: string | null,
};

export type OnCreateContactFormSubscription = {
  onCreateContactForm?:  {
    __typename: "ContactForm",
    email: string,
    name?: string | null,
    comment?: string | null,
  } | null,
};

export type OnUpdateContactFormSubscriptionVariables = {
  email?: string | null,
  name?: string | null,
  comment?: string | null,
};

export type OnUpdateContactFormSubscription = {
  onUpdateContactForm?:  {
    __typename: "ContactForm",
    email: string,
    name?: string | null,
    comment?: string | null,
  } | null,
};

export type OnDeleteContactFormSubscriptionVariables = {
  email?: string | null,
  name?: string | null,
  comment?: string | null,
};

export type OnDeleteContactFormSubscription = {
  onDeleteContactForm?:  {
    __typename: "ContactForm",
    email: string,
    name?: string | null,
    comment?: string | null,
  } | null,
};
