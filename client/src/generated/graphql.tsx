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
};

export type Game = {
  __typename?: 'Game';
  ended: Scalars['Boolean'];
  id: Scalars['String'];
  players: Array<User>;
  product: Product;
  slots: Scalars['Int'];
  started: Scalars['Boolean'];
  winner?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createGame: Scalars['String'];
  createPaymentIntent: PaymentIntent;
  createProduct: Product;
  createUser: UserResponse;
  likeProduct: User;
  notify: Scalars['String'];
  signInUser: UserResponse;
  unLikeProduct: User;
};


export type MutationCreateGameArgs = {
  productId: Scalars['String'];
  slots: Scalars['Int'];
};


export type MutationCreatePaymentIntentArgs = {
  planAmount: Scalars['Int'];
};


export type MutationCreateProductArgs = {
  description: Scalars['String'];
  image: Scalars['String'];
  price: Scalars['Int'];
  tags: Array<Scalars['String']>;
  title: Scalars['String'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};


export type MutationLikeProductArgs = {
  productId: Scalars['String'];
};


export type MutationNotifyArgs = {
  productId: Scalars['String'];
  text: Scalars['String'];
  title: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationSignInUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUnLikeProductArgs = {
  productId: Scalars['String'];
};

export type Notification = {
  __typename?: 'Notification';
  id: Scalars['String'];
  product: Product;
  text: Scalars['String'];
  title: Scalars['String'];
};

export type PaymentIntent = {
  __typename?: 'PaymentIntent';
  userSecret: Scalars['String'];
};

export type Product = {
  __typename?: 'Product';
  description: Scalars['String'];
  id: Scalars['String'];
  image: Scalars['String'];
  price: Scalars['Int'];
  tags: Array<Scalars['String']>;
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  game?: Maybe<Game>;
  getPublishableKey: Scalars['String'];
  me?: Maybe<User>;
  product?: Maybe<Product>;
  products: Array<Product>;
  userGames: Array<Maybe<Game>>;
  userLikes: Array<Maybe<Product>>;
};


export type QueryGameArgs = {
  gameId: Scalars['String'];
};


export type QueryProductArgs = {
  productId: Scalars['String'];
};


export type QueryProductsArgs = {
  search?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  games: Array<Maybe<Game>>;
  id: Scalars['String'];
  likes: Array<Maybe<Product>>;
  name: Scalars['String'];
  notifications: Array<Maybe<Notification>>;
  password: Scalars['String'];
  points: Scalars['Int'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  token: Scalars['String'];
  user: User;
};

export type CreateGameMutationVariables = Exact<{
  productId: Scalars['String'];
  slots: Scalars['Int'];
}>;


export type CreateGameMutation = { __typename?: 'Mutation', createGame: string };

export type CreatePaymentIntentMutationVariables = Exact<{
  planAmount: Scalars['Int'];
}>;


export type CreatePaymentIntentMutation = { __typename?: 'Mutation', createPaymentIntent: { __typename?: 'PaymentIntent', userSecret: string } };

export type CreateProductMutationVariables = Exact<{
  title: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  price: Scalars['Int'];
  tags: Array<Scalars['String']> | Scalars['String'];
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'Product', id: string, title: string, description: string, image: string, price: number, tags: Array<string> } };

export type CreateUserMutationVariables = Exact<{
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'UserResponse', token: string, user: { __typename?: 'User', id: string } } };

export type LikeProductMutationVariables = Exact<{
  productId: Scalars['String'];
}>;


export type LikeProductMutation = { __typename?: 'Mutation', likeProduct: { __typename?: 'User', id: string } };

export type SignInUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignInUserMutation = { __typename?: 'Mutation', signInUser: { __typename?: 'UserResponse', token: string, user: { __typename?: 'User', id: string } } };

export type UnLikeProductMutationVariables = Exact<{
  productId: Scalars['String'];
}>;


export type UnLikeProductMutation = { __typename?: 'Mutation', unLikeProduct: { __typename?: 'User', id: string } };

export type GameQueryVariables = Exact<{
  gameId: Scalars['String'];
}>;


export type GameQuery = { __typename?: 'Query', game?: { __typename?: 'Game', id: string, slots: number, winner?: string | null, started: boolean, ended: boolean, product: { __typename?: 'Product', id: string, title: string, description: string, image: string, price: number, tags: Array<string> }, players: Array<{ __typename?: 'User', id: string, name: string }> } | null };

export type GetPublishableKeyQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPublishableKeyQuery = { __typename?: 'Query', getPublishableKey: string };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, name: string, email: string, password: string, points: number } | null };

export type ProductQueryVariables = Exact<{
  productId: Scalars['String'];
}>;


export type ProductQuery = { __typename?: 'Query', product?: { __typename?: 'Product', id: string, title: string, description: string, image: string, price: number, tags: Array<string> } | null };

export type ProductsQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']>;
}>;


export type ProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: string, title: string, description: string, image: string, price: number, tags: Array<string> }> };

export type UserGamesQueryVariables = Exact<{ [key: string]: never; }>;


export type UserGamesQuery = { __typename?: 'Query', userGames: Array<{ __typename?: 'Game', id: string, slots: number, winner?: string | null, started: boolean, ended: boolean, product: { __typename?: 'Product', id: string, title: string, description: string, image: string, price: number, tags: Array<string> }, players: Array<{ __typename?: 'User', id: string, name: string, email: string }> } | null> };

export type UserLikesQueryVariables = Exact<{ [key: string]: never; }>;


export type UserLikesQuery = { __typename?: 'Query', userLikes: Array<{ __typename?: 'Product', id: string, description: string, title: string, image: string, price: number, tags: Array<string> } | null> };


export const CreateGameDocument = gql`
    mutation CreateGame($productId: String!, $slots: Int!) {
  createGame(productId: $productId, slots: $slots)
}
    `;
export type CreateGameMutationFn = Apollo.MutationFunction<CreateGameMutation, CreateGameMutationVariables>;

/**
 * __useCreateGameMutation__
 *
 * To run a mutation, you first call `useCreateGameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGameMutation, { data, loading, error }] = useCreateGameMutation({
 *   variables: {
 *      productId: // value for 'productId'
 *      slots: // value for 'slots'
 *   },
 * });
 */
export function useCreateGameMutation(baseOptions?: Apollo.MutationHookOptions<CreateGameMutation, CreateGameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGameMutation, CreateGameMutationVariables>(CreateGameDocument, options);
      }
export type CreateGameMutationHookResult = ReturnType<typeof useCreateGameMutation>;
export type CreateGameMutationResult = Apollo.MutationResult<CreateGameMutation>;
export type CreateGameMutationOptions = Apollo.BaseMutationOptions<CreateGameMutation, CreateGameMutationVariables>;
export const CreatePaymentIntentDocument = gql`
    mutation CreatePaymentIntent($planAmount: Int!) {
  createPaymentIntent(planAmount: $planAmount) {
    userSecret
  }
}
    `;
export type CreatePaymentIntentMutationFn = Apollo.MutationFunction<CreatePaymentIntentMutation, CreatePaymentIntentMutationVariables>;

/**
 * __useCreatePaymentIntentMutation__
 *
 * To run a mutation, you first call `useCreatePaymentIntentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePaymentIntentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPaymentIntentMutation, { data, loading, error }] = useCreatePaymentIntentMutation({
 *   variables: {
 *      planAmount: // value for 'planAmount'
 *   },
 * });
 */
export function useCreatePaymentIntentMutation(baseOptions?: Apollo.MutationHookOptions<CreatePaymentIntentMutation, CreatePaymentIntentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePaymentIntentMutation, CreatePaymentIntentMutationVariables>(CreatePaymentIntentDocument, options);
      }
export type CreatePaymentIntentMutationHookResult = ReturnType<typeof useCreatePaymentIntentMutation>;
export type CreatePaymentIntentMutationResult = Apollo.MutationResult<CreatePaymentIntentMutation>;
export type CreatePaymentIntentMutationOptions = Apollo.BaseMutationOptions<CreatePaymentIntentMutation, CreatePaymentIntentMutationVariables>;
export const CreateProductDocument = gql`
    mutation CreateProduct($title: String!, $description: String!, $image: String!, $price: Int!, $tags: [String!]!) {
  createProduct(
    title: $title
    description: $description
    image: $image
    price: $price
    tags: $tags
  ) {
    id
    title
    description
    image
    price
    tags
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      image: // value for 'image'
 *      price: // value for 'price'
 *      tags: // value for 'tags'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($email: String!, $name: String!, $password: String!) {
  createUser(email: $email, name: $name, password: $password) {
    user {
      id
    }
    token
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      name: // value for 'name'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const LikeProductDocument = gql`
    mutation LikeProduct($productId: String!) {
  likeProduct(productId: $productId) {
    id
  }
}
    `;
export type LikeProductMutationFn = Apollo.MutationFunction<LikeProductMutation, LikeProductMutationVariables>;

/**
 * __useLikeProductMutation__
 *
 * To run a mutation, you first call `useLikeProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeProductMutation, { data, loading, error }] = useLikeProductMutation({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useLikeProductMutation(baseOptions?: Apollo.MutationHookOptions<LikeProductMutation, LikeProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LikeProductMutation, LikeProductMutationVariables>(LikeProductDocument, options);
      }
export type LikeProductMutationHookResult = ReturnType<typeof useLikeProductMutation>;
export type LikeProductMutationResult = Apollo.MutationResult<LikeProductMutation>;
export type LikeProductMutationOptions = Apollo.BaseMutationOptions<LikeProductMutation, LikeProductMutationVariables>;
export const SignInUserDocument = gql`
    mutation SignInUser($email: String!, $password: String!) {
  signInUser(email: $email, password: $password) {
    user {
      id
    }
    token
  }
}
    `;
export type SignInUserMutationFn = Apollo.MutationFunction<SignInUserMutation, SignInUserMutationVariables>;

/**
 * __useSignInUserMutation__
 *
 * To run a mutation, you first call `useSignInUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInUserMutation, { data, loading, error }] = useSignInUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInUserMutation(baseOptions?: Apollo.MutationHookOptions<SignInUserMutation, SignInUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInUserMutation, SignInUserMutationVariables>(SignInUserDocument, options);
      }
export type SignInUserMutationHookResult = ReturnType<typeof useSignInUserMutation>;
export type SignInUserMutationResult = Apollo.MutationResult<SignInUserMutation>;
export type SignInUserMutationOptions = Apollo.BaseMutationOptions<SignInUserMutation, SignInUserMutationVariables>;
export const UnLikeProductDocument = gql`
    mutation UnLikeProduct($productId: String!) {
  unLikeProduct(productId: $productId) {
    id
  }
}
    `;
export type UnLikeProductMutationFn = Apollo.MutationFunction<UnLikeProductMutation, UnLikeProductMutationVariables>;

/**
 * __useUnLikeProductMutation__
 *
 * To run a mutation, you first call `useUnLikeProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnLikeProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unLikeProductMutation, { data, loading, error }] = useUnLikeProductMutation({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useUnLikeProductMutation(baseOptions?: Apollo.MutationHookOptions<UnLikeProductMutation, UnLikeProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnLikeProductMutation, UnLikeProductMutationVariables>(UnLikeProductDocument, options);
      }
export type UnLikeProductMutationHookResult = ReturnType<typeof useUnLikeProductMutation>;
export type UnLikeProductMutationResult = Apollo.MutationResult<UnLikeProductMutation>;
export type UnLikeProductMutationOptions = Apollo.BaseMutationOptions<UnLikeProductMutation, UnLikeProductMutationVariables>;
export const GameDocument = gql`
    query Game($gameId: String!) {
  game(gameId: $gameId) {
    id
    product {
      id
      title
      description
      image
      price
      tags
    }
    players {
      id
      name
    }
    slots
    winner
    started
    ended
  }
}
    `;

/**
 * __useGameQuery__
 *
 * To run a query within a React component, call `useGameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGameQuery({
 *   variables: {
 *      gameId: // value for 'gameId'
 *   },
 * });
 */
export function useGameQuery(baseOptions: Apollo.QueryHookOptions<GameQuery, GameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GameQuery, GameQueryVariables>(GameDocument, options);
      }
export function useGameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GameQuery, GameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GameQuery, GameQueryVariables>(GameDocument, options);
        }
export type GameQueryHookResult = ReturnType<typeof useGameQuery>;
export type GameLazyQueryHookResult = ReturnType<typeof useGameLazyQuery>;
export type GameQueryResult = Apollo.QueryResult<GameQuery, GameQueryVariables>;
export const GetPublishableKeyDocument = gql`
    query GetPublishableKey {
  getPublishableKey
}
    `;

/**
 * __useGetPublishableKeyQuery__
 *
 * To run a query within a React component, call `useGetPublishableKeyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPublishableKeyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPublishableKeyQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPublishableKeyQuery(baseOptions?: Apollo.QueryHookOptions<GetPublishableKeyQuery, GetPublishableKeyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPublishableKeyQuery, GetPublishableKeyQueryVariables>(GetPublishableKeyDocument, options);
      }
export function useGetPublishableKeyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPublishableKeyQuery, GetPublishableKeyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPublishableKeyQuery, GetPublishableKeyQueryVariables>(GetPublishableKeyDocument, options);
        }
export type GetPublishableKeyQueryHookResult = ReturnType<typeof useGetPublishableKeyQuery>;
export type GetPublishableKeyLazyQueryHookResult = ReturnType<typeof useGetPublishableKeyLazyQuery>;
export type GetPublishableKeyQueryResult = Apollo.QueryResult<GetPublishableKeyQuery, GetPublishableKeyQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    name
    email
    password
    points
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const ProductDocument = gql`
    query Product($productId: String!) {
  product(productId: $productId) {
    id
    title
    description
    image
    price
    tags
  }
}
    `;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useProductQuery(baseOptions: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
      }
export function useProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
        }
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;
export const ProductsDocument = gql`
    query Products($search: String) {
  products(search: $search) {
    id
    title
    description
    image
    price
    tags
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const UserGamesDocument = gql`
    query UserGames {
  userGames {
    id
    slots
    winner
    started
    ended
    product {
      id
      title
      description
      image
      price
      tags
    }
    players {
      id
      name
      email
    }
  }
}
    `;

/**
 * __useUserGamesQuery__
 *
 * To run a query within a React component, call `useUserGamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserGamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserGamesQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserGamesQuery(baseOptions?: Apollo.QueryHookOptions<UserGamesQuery, UserGamesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserGamesQuery, UserGamesQueryVariables>(UserGamesDocument, options);
      }
export function useUserGamesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserGamesQuery, UserGamesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserGamesQuery, UserGamesQueryVariables>(UserGamesDocument, options);
        }
export type UserGamesQueryHookResult = ReturnType<typeof useUserGamesQuery>;
export type UserGamesLazyQueryHookResult = ReturnType<typeof useUserGamesLazyQuery>;
export type UserGamesQueryResult = Apollo.QueryResult<UserGamesQuery, UserGamesQueryVariables>;
export const UserLikesDocument = gql`
    query UserLikes {
  userLikes {
    id
    description
    title
    image
    price
    tags
  }
}
    `;

/**
 * __useUserLikesQuery__
 *
 * To run a query within a React component, call `useUserLikesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserLikesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserLikesQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserLikesQuery(baseOptions?: Apollo.QueryHookOptions<UserLikesQuery, UserLikesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserLikesQuery, UserLikesQueryVariables>(UserLikesDocument, options);
      }
export function useUserLikesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserLikesQuery, UserLikesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserLikesQuery, UserLikesQueryVariables>(UserLikesDocument, options);
        }
export type UserLikesQueryHookResult = ReturnType<typeof useUserLikesQuery>;
export type UserLikesLazyQueryHookResult = ReturnType<typeof useUserLikesLazyQuery>;
export type UserLikesQueryResult = Apollo.QueryResult<UserLikesQuery, UserLikesQueryVariables>;