import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    Date: any;
    title_String_NotNull_maxLength_144: string;
    platform_partners: [{
        platformLink: string;
        embeddedAudio: string;
    }];
};

export type Link = {
    dateCreated: Scalars['Date'];
    link: Scalars['String'];
    title: Scalars['title_String_NotNull_maxLength_144'];
    userId: Scalars['String'];
};

export type Mutation = {
    __typename?: 'Mutation';
    createRegularLink: RegularLink;
    updateRegularLink: RegularLink;
};


export type MutationCreateRegularLinkArgs = {
    input: {
        title: Scalars['title_String_NotNull_maxLength_144'];
        userId: Scalars['String'];
        link: Scalars['String'];
    }
};

export type MutationCreateMusicLinkArgs = {
    input: {
        title: Scalars['title_String_NotNull_maxLength_144'];
        userId: Scalars['String'];
        link: Scalars['String'];
        platformPartner: Scalars['platform_partners']
    }
};

export type MutationUpdateRegularLinkArgs = {
    id: Scalars['ID'];
    input: {
        link: Scalars['String'];
        title?: Scalars['title_String_NotNull_maxLength_144'];
    }
};

export type QueryRegularLinkArgs = {
    id: Scalars['ID'];
};

export type AllLinksArgs = {
    userId: Scalars['String'];
};

export type RegularLink = Link & {
    __typename?: 'RegularLink';
    dateCreated: Scalars['Date'];
    id: Scalars['ID'];
    link: Scalars['String'];
    title: Scalars['title_String_NotNull_maxLength_144'];
    userId: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
    resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
    | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
    | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
    | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
    | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
    parent: TParent,
    context: TContext,
    info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
    next: NextResolverFn<TResult>,
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
    Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
    Date: ResolverTypeWrapper<Scalars['Date']>;
    Float: ResolverTypeWrapper<Scalars['Float']>;
    ID: ResolverTypeWrapper<Scalars['ID']>;
    Int: ResolverTypeWrapper<Scalars['Int']>;
    Link: ResolversTypes['RegularLink'];
    Mutation: ResolverTypeWrapper<{}>;
    Query: ResolverTypeWrapper<{}>;
    RegularLink: ResolverTypeWrapper<RegularLink>;
    String: ResolverTypeWrapper<Scalars['String']>;
    title_String_NotNull_maxLength_144: ResolverTypeWrapper<Scalars['title_String_NotNull_maxLength_144']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
    Boolean: Scalars['Boolean'];
    Date: Scalars['Date'];
    Float: Scalars['Float'];
    ID: Scalars['ID'];
    Int: Scalars['Int'];
    Link: ResolversParentTypes['RegularLink'];
    Mutation: {};
    Query: {};
    RegularLink: RegularLink;
    String: Scalars['String'];
    title_String_NotNull_maxLength_144: Scalars['title_String_NotNull_maxLength_144'];
};

export type ConstraintDirectiveArgs = {
    contains?: Maybe<Scalars['String']>;
    endsWith?: Maybe<Scalars['String']>;
    exclusiveMax?: Maybe<Scalars['Float']>;
    exclusiveMin?: Maybe<Scalars['Float']>;
    format?: Maybe<Scalars['String']>;
    max?: Maybe<Scalars['Float']>;
    maxLength?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Float']>;
    minLength?: Maybe<Scalars['Int']>;
    multipleOf?: Maybe<Scalars['Float']>;
    notContains?: Maybe<Scalars['String']>;
    pattern?: Maybe<Scalars['String']>;
    startsWith?: Maybe<Scalars['String']>;
    uniqueTypeName?: Maybe<Scalars['String']>;
};

export type ConstraintDirectiveResolver<Result, Parent, ContextType = any, Args = ConstraintDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
    name: 'Date';
}

export type LinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['Link'] = ResolversParentTypes['Link']> = {
    __resolveType: TypeResolveFn<'RegularLink', ParentType, ContextType>;
    dateCreated?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
    link?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    title?: Resolver<ResolversTypes['title_String_NotNull_maxLength_144'], ParentType, ContextType>;
    userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
    createRegularLink?: Resolver<ResolversTypes['RegularLink'], ParentType, ContextType, RequireFields<MutationCreateRegularLinkArgs, 'input'>>;
    updateRegularLink?: Resolver<ResolversTypes['RegularLink'], ParentType, ContextType, RequireFields<MutationUpdateRegularLinkArgs, 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
    regularLink?: Resolver<ResolversTypes['RegularLink'], ParentType, ContextType, RequireFields<QueryRegularLinkArgs, 'id'>>;
    regularLinks?: Resolver<Array<Maybe<ResolversTypes['RegularLink']>>, ParentType, ContextType>;
};

export type RegularLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegularLink'] = ResolversParentTypes['RegularLink']> = {
    dateCreated?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    link?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    title?: Resolver<ResolversTypes['title_String_NotNull_maxLength_144'], ParentType, ContextType>;
    userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface Title_String_NotNull_MaxLength_144ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['title_String_NotNull_maxLength_144'], any> {
    name: 'title_String_NotNull_maxLength_144';
}

export type Resolvers<ContextType = any> = {
    Date?: GraphQLScalarType;
    Link?: LinkResolvers<ContextType>;
    Mutation?: MutationResolvers<ContextType>;
    Query?: QueryResolvers<ContextType>;
    RegularLink?: RegularLinkResolvers<ContextType>;
    title_String_NotNull_maxLength_144?: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = any> = {
    constraint?: ConstraintDirectiveResolver<any, any, ContextType>;
};
