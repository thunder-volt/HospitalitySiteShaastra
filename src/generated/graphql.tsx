import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type CapturePaymentInput = {
  orderId: Scalars['String'];
  payementId: Scalars['String'];
  paymentSignature: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  capturePayment: Scalars['Boolean'];
  getPasswordOTP: Scalars['Boolean'];
  logoutUser: Scalars['Boolean'];
  registerUser: Users;
  resendVerificationMail: Scalars['Boolean'];
  verifyUser: Scalars['Boolean'];
};


export type MutationCapturePaymentArgs = {
  Input: CapturePaymentInput;
};


export type MutationGetPasswordOtpArgs = {
  Input: RequestForgotPassInput;
};


export type MutationRegisterUserArgs = {
  Input: RegisterUserInput;
};


export type MutationResendVerificationMailArgs = {
  Input: RequestForgotPassInput;
};


export type MutationVerifyUserArgs = {
  Input: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getCSV: Scalars['String'];
  getRegistrations: Array<Users>;
};

export type RegisterUserInput = {
  accomodation: Scalars['String'];
  accomodationFrom: Scalars['DateTime'];
  accomodationTo: Scalars['DateTime'];
  address: Scalars['String'];
  college: Scalars['String'];
  dob: Scalars['DateTime'];
  email: Scalars['String'];
  gender: Scalars['String'];
  name: Scalars['String'];
  noOfDays: Scalars['Float'];
  noOfMen: Scalars['Float'];
  noOfWomen: Scalars['Float'];
  personalId: Scalars['String'];
  personalIdType: Scalars['String'];
  phone: Scalars['String'];
  year: Scalars['Float'];
};

export type RequestForgotPassInput = {
  email: Scalars['String'];
};

export type Users = {
  __typename?: 'Users';
  accomodation: Scalars['String'];
  accomodationFrom: Scalars['DateTime'];
  accomodationTo: Scalars['DateTime'];
  address: Scalars['String'];
  age: Scalars['Float'];
  amount: Scalars['Float'];
  college: Scalars['String'];
  dob: Scalars['DateTime'];
  email: Scalars['String'];
  gender: Scalars['String'];
  hostel?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isPaid: Scalars['Boolean'];
  isVerified: Scalars['Boolean'];
  name: Scalars['String'];
  noOfDays: Scalars['Float'];
  noOfMen: Scalars['Float'];
  noOfWomen: Scalars['Float'];
  orderId: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  passwordOTP?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
  paymentSignature?: Maybe<Scalars['String']>;
  personalId: Scalars['String'];
  personalIdType: Scalars['String'];
  phone: Scalars['String'];
  registerId: Scalars['String'];
  room?: Maybe<Scalars['String']>;
  verificationOTP: Scalars['String'];
  year: Scalars['Float'];
};

export type RegisterUserMutationVariables = Exact<{
  input: RegisterUserInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'Users', orderId: string, amount: number, name: string, email: string, phone: string, address: string } };

export type VerifyUserMutationVariables = Exact<{
  input: Scalars['String'];
}>;


export type VerifyUserMutation = { __typename?: 'Mutation', verifyUser: boolean };

export type CapturePaymentMutationVariables = Exact<{
  input: CapturePaymentInput;
}>;


export type CapturePaymentMutation = { __typename?: 'Mutation', capturePayment: boolean };


export const RegisterUserDocument = gql`
    mutation registerUser($input: RegisterUserInput!) {
  registerUser(Input: $input) {
    orderId
    amount
    name
    email
    phone
    address
  }
}
    `;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, options);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const VerifyUserDocument = gql`
    mutation verifyUser($input: String!) {
  verifyUser(Input: $input)
}
    `;
export type VerifyUserMutationFn = Apollo.MutationFunction<VerifyUserMutation, VerifyUserMutationVariables>;

/**
 * __useVerifyUserMutation__
 *
 * To run a mutation, you first call `useVerifyUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyUserMutation, { data, loading, error }] = useVerifyUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useVerifyUserMutation(baseOptions?: Apollo.MutationHookOptions<VerifyUserMutation, VerifyUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyUserMutation, VerifyUserMutationVariables>(VerifyUserDocument, options);
      }
export type VerifyUserMutationHookResult = ReturnType<typeof useVerifyUserMutation>;
export type VerifyUserMutationResult = Apollo.MutationResult<VerifyUserMutation>;
export type VerifyUserMutationOptions = Apollo.BaseMutationOptions<VerifyUserMutation, VerifyUserMutationVariables>;
export const CapturePaymentDocument = gql`
    mutation capturePayment($input: CapturePaymentInput!) {
  capturePayment(Input: $input)
}
    `;
export type CapturePaymentMutationFn = Apollo.MutationFunction<CapturePaymentMutation, CapturePaymentMutationVariables>;

/**
 * __useCapturePaymentMutation__
 *
 * To run a mutation, you first call `useCapturePaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCapturePaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [capturePaymentMutation, { data, loading, error }] = useCapturePaymentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCapturePaymentMutation(baseOptions?: Apollo.MutationHookOptions<CapturePaymentMutation, CapturePaymentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CapturePaymentMutation, CapturePaymentMutationVariables>(CapturePaymentDocument, options);
      }
export type CapturePaymentMutationHookResult = ReturnType<typeof useCapturePaymentMutation>;
export type CapturePaymentMutationResult = Apollo.MutationResult<CapturePaymentMutation>;
export type CapturePaymentMutationOptions = Apollo.BaseMutationOptions<CapturePaymentMutation, CapturePaymentMutationVariables>;