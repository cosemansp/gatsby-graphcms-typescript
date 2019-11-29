/* eslint:disable */
export type Maybe<T> = T | null;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  GraphCMS_DateTime: any;
  /**
   * The `Long` scalar type represents non-fractional signed whole numeric values.
   * Long can represent values between -(2^63) and 2^63 - 1.
   */
  GraphCMS_Long: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type GraphCms = {
  __typename?: 'GraphCMS';
  assets: Array<Maybe<GraphCms_Asset>>;
  posts: Array<Maybe<GraphCms_Post>>;
  authors: Array<Maybe<GraphCms_Author>>;
  asset?: Maybe<GraphCms_Asset>;
  post?: Maybe<GraphCms_Post>;
  author?: Maybe<GraphCms_Author>;
  assetsConnection: GraphCms_AssetConnection;
  postsConnection: GraphCms_PostConnection;
  authorsConnection: GraphCms_AuthorConnection;
  /** Fetches an object given its ID */
  node?: Maybe<GraphCms_Node>;
};

export type GraphCmsAssetsArgs = {
  where?: Maybe<GraphCms_AssetWhereInput>;
  orderBy?: Maybe<GraphCms_AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type GraphCmsPostsArgs = {
  where?: Maybe<GraphCms_PostWhereInput>;
  orderBy?: Maybe<GraphCms_PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type GraphCmsAuthorsArgs = {
  where?: Maybe<GraphCms_AuthorWhereInput>;
  orderBy?: Maybe<GraphCms_AuthorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type GraphCmsAssetArgs = {
  where: GraphCms_AssetWhereUniqueInput;
};

export type GraphCmsPostArgs = {
  where: GraphCms_PostWhereUniqueInput;
};

export type GraphCmsAuthorArgs = {
  where: GraphCms_AuthorWhereUniqueInput;
};

export type GraphCmsAssetsConnectionArgs = {
  where?: Maybe<GraphCms_AssetWhereInput>;
  orderBy?: Maybe<GraphCms_AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type GraphCmsPostsConnectionArgs = {
  where?: Maybe<GraphCms_PostWhereInput>;
  orderBy?: Maybe<GraphCms_PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type GraphCmsAuthorsConnectionArgs = {
  where?: Maybe<GraphCms_AuthorWhereInput>;
  orderBy?: Maybe<GraphCms_AuthorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type GraphCmsNodeArgs = {
  id: Scalars['ID'];
};

export type GraphCms_AggregateAsset = {
  __typename?: 'GraphCMS_AggregateAsset';
  count: Scalars['Int'];
};

export type GraphCms_AggregateAuthor = {
  __typename?: 'GraphCMS_AggregateAuthor';
  count: Scalars['Int'];
};

export type GraphCms_AggregatePost = {
  __typename?: 'GraphCMS_AggregatePost';
  count: Scalars['Int'];
};

export type GraphCms_Asset = GraphCms_Node & {
  __typename?: 'GraphCMS_Asset';
  status: GraphCms_Status;
  updatedAt: Scalars['GraphCMS_DateTime'];
  createdAt: Scalars['GraphCMS_DateTime'];
  id: Scalars['ID'];
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  coverImagePost?: Maybe<Array<GraphCms_Post>>;
  avatarAuthor?: Maybe<Array<GraphCms_Author>>;
  altText?: Maybe<Scalars['String']>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
};

export type GraphCms_AssetCoverImagePostArgs = {
  where?: Maybe<GraphCms_PostWhereInput>;
  orderBy?: Maybe<GraphCms_PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type GraphCms_AssetAvatarAuthorArgs = {
  where?: Maybe<GraphCms_AuthorWhereInput>;
  orderBy?: Maybe<GraphCms_AuthorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type GraphCms_AssetUrlArgs = {
  transformation?: Maybe<GraphCms_AssetTransformationInput>;
};

/** A connection to a list of items. */
export type GraphCms_AssetConnection = {
  __typename?: 'GraphCMS_AssetConnection';
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<GraphCms_AssetEdge>>;
  aggregate: GraphCms_AggregateAsset;
};

export type GraphCms_AssetCreateInput = {
  status?: Maybe<GraphCms_Status>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  coverImagePost?: Maybe<GraphCms_PostCreateManyWithoutCoverImageInput>;
  avatarAuthor?: Maybe<GraphCms_AuthorCreateManyWithoutAvatarInput>;
};

export type GraphCms_AssetCreateOneWithoutAvatarAuthorInput = {
  upload?: Maybe<GraphCms_AssetUploadWithoutAvatarAuthorInput>;
  create?: Maybe<GraphCms_AssetCreateWithoutAvatarAuthorInput>;
  connect?: Maybe<GraphCms_AssetWhereUniqueInput>;
};

export type GraphCms_AssetCreateOneWithoutCoverImagePostInput = {
  upload?: Maybe<GraphCms_AssetUploadWithoutCoverImagePostInput>;
  create?: Maybe<GraphCms_AssetCreateWithoutCoverImagePostInput>;
  connect?: Maybe<GraphCms_AssetWhereUniqueInput>;
};

export type GraphCms_AssetCreateWithoutAvatarAuthorInput = {
  status?: Maybe<GraphCms_Status>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  coverImagePost?: Maybe<GraphCms_PostCreateManyWithoutCoverImageInput>;
};

export type GraphCms_AssetCreateWithoutCoverImagePostInput = {
  status?: Maybe<GraphCms_Status>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  avatarAuthor?: Maybe<GraphCms_AuthorCreateManyWithoutAvatarInput>;
};

/** An edge in a connection. */
export type GraphCms_AssetEdge = {
  __typename?: 'GraphCMS_AssetEdge';
  /** The item at the end of the edge. */
  node: GraphCms_Asset;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum GraphCms_AssetOrderByInput {
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
}

export type GraphCms_AssetPreviousValues = {
  __typename?: 'GraphCMS_AssetPreviousValues';
  status: GraphCms_Status;
  updatedAt: Scalars['GraphCMS_DateTime'];
  createdAt: Scalars['GraphCMS_DateTime'];
  id: Scalars['ID'];
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
};

export type GraphCms_AssetSubscriptionPayload = {
  __typename?: 'GraphCMS_AssetSubscriptionPayload';
  mutation: GraphCms_MutationType;
  node?: Maybe<GraphCms_Asset>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<GraphCms_AssetPreviousValues>;
};

export type GraphCms_AssetSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_AssetSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_AssetSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_AssetSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<GraphCms_MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<GraphCms_AssetWhereInput>;
};

/** Transformations for Assets */
export type GraphCms_AssetTransformationInput = {
  image?: Maybe<GraphCms_ImageTransformationInput>;
  document?: Maybe<GraphCms_DocumentTransformationInput>;
  /** Pass `true` if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>;
};

export type GraphCms_AssetUpdateInput = {
  status?: Maybe<GraphCms_Status>;
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  coverImagePost?: Maybe<GraphCms_PostUpdateManyWithoutCoverImageInput>;
  avatarAuthor?: Maybe<GraphCms_AuthorUpdateManyWithoutAvatarInput>;
};

export type GraphCms_AssetUpdateManyMutationInput = {
  status?: Maybe<GraphCms_Status>;
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
};

export type GraphCms_AssetUpdateOneWithoutAvatarAuthorInput = {
  create?: Maybe<GraphCms_AssetCreateWithoutAvatarAuthorInput>;
  connect?: Maybe<GraphCms_AssetWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<GraphCms_AssetUpdateWithoutAvatarAuthorDataInput>;
  upsert?: Maybe<GraphCms_AssetUpsertWithoutAvatarAuthorInput>;
};

export type GraphCms_AssetUpdateOneWithoutCoverImagePostInput = {
  create?: Maybe<GraphCms_AssetCreateWithoutCoverImagePostInput>;
  connect?: Maybe<GraphCms_AssetWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<GraphCms_AssetUpdateWithoutCoverImagePostDataInput>;
  upsert?: Maybe<GraphCms_AssetUpsertWithoutCoverImagePostInput>;
};

export type GraphCms_AssetUpdateWithoutAvatarAuthorDataInput = {
  status?: Maybe<GraphCms_Status>;
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  coverImagePost?: Maybe<GraphCms_PostUpdateManyWithoutCoverImageInput>;
};

export type GraphCms_AssetUpdateWithoutCoverImagePostDataInput = {
  status?: Maybe<GraphCms_Status>;
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  avatarAuthor?: Maybe<GraphCms_AuthorUpdateManyWithoutAvatarInput>;
};

export type GraphCms_AssetUploadInput = {
  url: Scalars['String'];
  status?: Maybe<GraphCms_Status>;
  altText?: Maybe<Scalars['String']>;
  coverImagePost?: Maybe<GraphCms_PostCreateManyWithoutCoverImageInput>;
  avatarAuthor?: Maybe<GraphCms_AuthorCreateManyWithoutAvatarInput>;
};

export type GraphCms_AssetUploadWithoutAvatarAuthorInput = {
  url: Scalars['String'];
  status?: Maybe<GraphCms_Status>;
  altText?: Maybe<Scalars['String']>;
  coverImagePost?: Maybe<GraphCms_PostCreateManyWithoutCoverImageInput>;
};

export type GraphCms_AssetUploadWithoutCoverImagePostInput = {
  url: Scalars['String'];
  status?: Maybe<GraphCms_Status>;
  altText?: Maybe<Scalars['String']>;
  avatarAuthor?: Maybe<GraphCms_AuthorCreateManyWithoutAvatarInput>;
};

export type GraphCms_AssetUpsertWithoutAvatarAuthorInput = {
  update: GraphCms_AssetUpdateWithoutAvatarAuthorDataInput;
  create: GraphCms_AssetCreateWithoutAvatarAuthorInput;
};

export type GraphCms_AssetUpsertWithoutCoverImagePostInput = {
  update: GraphCms_AssetUpdateWithoutCoverImagePostDataInput;
  create: GraphCms_AssetCreateWithoutCoverImagePostInput;
};

export type GraphCms_AssetWhereInput = {
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_AssetWhereInput>>;
  status?: Maybe<GraphCms_Status>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<GraphCms_Status>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<GraphCms_Status>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<GraphCms_Status>>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  handle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  handle_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  handle_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  handle_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  handle_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  handle_not_ends_with?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  fileName_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  fileName_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  fileName_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  fileName_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  fileName_not_ends_with?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  mimeType_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  mimeType_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  mimeType_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  mimeType_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  mimeType_not_ends_with?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  altText_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  altText_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  altText_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  altText_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  altText_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  altText_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  altText_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  altText_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  altText_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  altText_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  altText_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  altText_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  altText_not_ends_with?: Maybe<Scalars['String']>;
  coverImagePost_every?: Maybe<GraphCms_PostWhereInput>;
  coverImagePost_some?: Maybe<GraphCms_PostWhereInput>;
  coverImagePost_none?: Maybe<GraphCms_PostWhereInput>;
  avatarAuthor_every?: Maybe<GraphCms_AuthorWhereInput>;
  avatarAuthor_some?: Maybe<GraphCms_AuthorWhereInput>;
  avatarAuthor_none?: Maybe<GraphCms_AuthorWhereInput>;
};

export type GraphCms_AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  handle?: Maybe<Scalars['String']>;
};

export type GraphCms_Author = GraphCms_Node & {
  __typename?: 'GraphCMS_Author';
  status: GraphCms_Status;
  updatedAt: Scalars['GraphCMS_DateTime'];
  createdAt: Scalars['GraphCMS_DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  avatar?: Maybe<GraphCms_Asset>;
  bibliography?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<GraphCms_Post>>;
};

export type GraphCms_AuthorPostsArgs = {
  where?: Maybe<GraphCms_PostWhereInput>;
  orderBy?: Maybe<GraphCms_PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type GraphCms_AuthorConnection = {
  __typename?: 'GraphCMS_AuthorConnection';
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<GraphCms_AuthorEdge>>;
  aggregate: GraphCms_AggregateAuthor;
};

export type GraphCms_AuthorCreateInput = {
  status?: Maybe<GraphCms_Status>;
  name: Scalars['String'];
  bibliography?: Maybe<Scalars['String']>;
  avatar?: Maybe<GraphCms_AssetCreateOneWithoutAvatarAuthorInput>;
  posts?: Maybe<GraphCms_PostCreateManyWithoutAuthorsInput>;
};

export type GraphCms_AuthorCreateManyWithoutAvatarInput = {
  create?: Maybe<Array<GraphCms_AuthorCreateWithoutAvatarInput>>;
  connect?: Maybe<Array<GraphCms_AuthorWhereUniqueInput>>;
};

export type GraphCms_AuthorCreateManyWithoutPostsInput = {
  create?: Maybe<Array<GraphCms_AuthorCreateWithoutPostsInput>>;
  connect?: Maybe<Array<GraphCms_AuthorWhereUniqueInput>>;
};

export type GraphCms_AuthorCreateWithoutAvatarInput = {
  status?: Maybe<GraphCms_Status>;
  name: Scalars['String'];
  bibliography?: Maybe<Scalars['String']>;
  posts?: Maybe<GraphCms_PostCreateManyWithoutAuthorsInput>;
};

export type GraphCms_AuthorCreateWithoutPostsInput = {
  status?: Maybe<GraphCms_Status>;
  name: Scalars['String'];
  bibliography?: Maybe<Scalars['String']>;
  avatar?: Maybe<GraphCms_AssetCreateOneWithoutAvatarAuthorInput>;
};

/** An edge in a connection. */
export type GraphCms_AuthorEdge = {
  __typename?: 'GraphCMS_AuthorEdge';
  /** The item at the end of the edge. */
  node: GraphCms_Author;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum GraphCms_AuthorOrderByInput {
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  BibliographyAsc = 'bibliography_ASC',
  BibliographyDesc = 'bibliography_DESC',
}

export type GraphCms_AuthorPreviousValues = {
  __typename?: 'GraphCMS_AuthorPreviousValues';
  status: GraphCms_Status;
  updatedAt: Scalars['GraphCMS_DateTime'];
  createdAt: Scalars['GraphCMS_DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  bibliography?: Maybe<Scalars['String']>;
};

export type GraphCms_AuthorScalarWhereInput = {
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_AuthorScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_AuthorScalarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_AuthorScalarWhereInput>>;
  status?: Maybe<GraphCms_Status>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<GraphCms_Status>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<GraphCms_Status>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<GraphCms_Status>>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  bibliography?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  bibliography_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bibliography_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  bibliography_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  bibliography_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  bibliography_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  bibliography_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  bibliography_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  bibliography_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  bibliography_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  bibliography_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  bibliography_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  bibliography_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  bibliography_not_ends_with?: Maybe<Scalars['String']>;
};

export type GraphCms_AuthorSubscriptionPayload = {
  __typename?: 'GraphCMS_AuthorSubscriptionPayload';
  mutation: GraphCms_MutationType;
  node?: Maybe<GraphCms_Author>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<GraphCms_AuthorPreviousValues>;
};

export type GraphCms_AuthorSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_AuthorSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_AuthorSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_AuthorSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<GraphCms_MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<GraphCms_AuthorWhereInput>;
};

export type GraphCms_AuthorUpdateInput = {
  status?: Maybe<GraphCms_Status>;
  name?: Maybe<Scalars['String']>;
  bibliography?: Maybe<Scalars['String']>;
  avatar?: Maybe<GraphCms_AssetUpdateOneWithoutAvatarAuthorInput>;
  posts?: Maybe<GraphCms_PostUpdateManyWithoutAuthorsInput>;
};

export type GraphCms_AuthorUpdateManyDataInput = {
  status?: Maybe<GraphCms_Status>;
  name?: Maybe<Scalars['String']>;
  bibliography?: Maybe<Scalars['String']>;
};

export type GraphCms_AuthorUpdateManyMutationInput = {
  status?: Maybe<GraphCms_Status>;
  name?: Maybe<Scalars['String']>;
  bibliography?: Maybe<Scalars['String']>;
};

export type GraphCms_AuthorUpdateManyWithoutAvatarInput = {
  create?: Maybe<Array<GraphCms_AuthorCreateWithoutAvatarInput>>;
  connect?: Maybe<Array<GraphCms_AuthorWhereUniqueInput>>;
  set?: Maybe<Array<GraphCms_AuthorWhereUniqueInput>>;
  disconnect?: Maybe<Array<GraphCms_AuthorWhereUniqueInput>>;
  delete?: Maybe<Array<GraphCms_AuthorWhereUniqueInput>>;
  update?: Maybe<Array<GraphCms_AuthorUpdateWithWhereUniqueWithoutAvatarInput>>;
  updateMany?: Maybe<Array<GraphCms_AuthorUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<GraphCms_AuthorScalarWhereInput>>;
  upsert?: Maybe<Array<GraphCms_AuthorUpsertWithWhereUniqueWithoutAvatarInput>>;
};

export type GraphCms_AuthorUpdateManyWithoutPostsInput = {
  create?: Maybe<Array<GraphCms_AuthorCreateWithoutPostsInput>>;
  connect?: Maybe<Array<GraphCms_AuthorWhereUniqueInput>>;
  set?: Maybe<Array<GraphCms_AuthorWhereUniqueInput>>;
  disconnect?: Maybe<Array<GraphCms_AuthorWhereUniqueInput>>;
  delete?: Maybe<Array<GraphCms_AuthorWhereUniqueInput>>;
  update?: Maybe<Array<GraphCms_AuthorUpdateWithWhereUniqueWithoutPostsInput>>;
  updateMany?: Maybe<Array<GraphCms_AuthorUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<GraphCms_AuthorScalarWhereInput>>;
  upsert?: Maybe<Array<GraphCms_AuthorUpsertWithWhereUniqueWithoutPostsInput>>;
};

export type GraphCms_AuthorUpdateManyWithWhereNestedInput = {
  where: GraphCms_AuthorScalarWhereInput;
  data: GraphCms_AuthorUpdateManyDataInput;
};

export type GraphCms_AuthorUpdateWithoutAvatarDataInput = {
  status?: Maybe<GraphCms_Status>;
  name?: Maybe<Scalars['String']>;
  bibliography?: Maybe<Scalars['String']>;
  posts?: Maybe<GraphCms_PostUpdateManyWithoutAuthorsInput>;
};

export type GraphCms_AuthorUpdateWithoutPostsDataInput = {
  status?: Maybe<GraphCms_Status>;
  name?: Maybe<Scalars['String']>;
  bibliography?: Maybe<Scalars['String']>;
  avatar?: Maybe<GraphCms_AssetUpdateOneWithoutAvatarAuthorInput>;
};

export type GraphCms_AuthorUpdateWithWhereUniqueWithoutAvatarInput = {
  where: GraphCms_AuthorWhereUniqueInput;
  data: GraphCms_AuthorUpdateWithoutAvatarDataInput;
};

export type GraphCms_AuthorUpdateWithWhereUniqueWithoutPostsInput = {
  where: GraphCms_AuthorWhereUniqueInput;
  data: GraphCms_AuthorUpdateWithoutPostsDataInput;
};

export type GraphCms_AuthorUpsertWithWhereUniqueWithoutAvatarInput = {
  where: GraphCms_AuthorWhereUniqueInput;
  update: GraphCms_AuthorUpdateWithoutAvatarDataInput;
  create: GraphCms_AuthorCreateWithoutAvatarInput;
};

export type GraphCms_AuthorUpsertWithWhereUniqueWithoutPostsInput = {
  where: GraphCms_AuthorWhereUniqueInput;
  update: GraphCms_AuthorUpdateWithoutPostsDataInput;
  create: GraphCms_AuthorCreateWithoutPostsInput;
};

export type GraphCms_AuthorWhereInput = {
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_AuthorWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_AuthorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_AuthorWhereInput>>;
  status?: Maybe<GraphCms_Status>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<GraphCms_Status>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<GraphCms_Status>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<GraphCms_Status>>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  bibliography?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  bibliography_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bibliography_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  bibliography_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  bibliography_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  bibliography_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  bibliography_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  bibliography_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  bibliography_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  bibliography_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  bibliography_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  bibliography_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  bibliography_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  bibliography_not_ends_with?: Maybe<Scalars['String']>;
  avatar?: Maybe<GraphCms_AssetWhereInput>;
  posts_every?: Maybe<GraphCms_PostWhereInput>;
  posts_some?: Maybe<GraphCms_PostWhereInput>;
  posts_none?: Maybe<GraphCms_PostWhereInput>;
};

export type GraphCms_AuthorWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type GraphCms_BatchPayload = {
  __typename?: 'GraphCMS_BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['GraphCMS_Long'];
};

export enum GraphCms_DocumentFileTypes {
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Png = 'png',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Docx = 'docx',
  Html = 'html',
  Pdf = 'pdf',
  Doc = 'doc',
  Xlsx = 'xlsx',
  Xls = 'xls',
  Pptx = 'pptx',
  Ppt = 'ppt',
}

export type GraphCms_DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<GraphCms_DocumentFileTypes>;
};

/** Transformations for Documents */
export type GraphCms_DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<GraphCms_DocumentOutputInput>;
};

export enum GraphCms_ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /**
   * Resizes the image to fit the specified parameters exactly by removing any
   * parts of the image that don't fit within the boundaries.
   */
  Crop = 'crop',
  /**
   * Resizes the image to fit the specified parameters exactly by scaling the image
   * to the desired size. The aspect ratio of the image is not respected and the
   * image can be distorted using this method.
   */
  Scale = 'scale',
  /**
   * Resizes the image to fit within the parameters, but as opposed to 'fit:clip'
   * will not scale the image if the image is smaller than the output size.
   */
  Max = 'max',
}

export type GraphCms_ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>;
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<GraphCms_ImageFit>;
};

/** Transformations for Images */
export type GraphCms_ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<GraphCms_ImageResizeInput>;
};

export enum GraphCms_Locale {
  En = 'EN',
}

export enum GraphCms_MutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED',
}

/** An object with an ID */
export type GraphCms_Node = {
  /** The id of the object. */
  id: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type GraphCms_PageInfo = {
  __typename?: 'GraphCMS_PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

export type GraphCms_Post = GraphCms_Node & {
  __typename?: 'GraphCMS_Post';
  status: GraphCms_Status;
  updatedAt: Scalars['GraphCMS_DateTime'];
  createdAt: Scalars['GraphCMS_DateTime'];
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  tags: Array<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  coverImage?: Maybe<GraphCms_Asset>;
  dateAndTime?: Maybe<Scalars['GraphCMS_DateTime']>;
  authors?: Maybe<Array<GraphCms_Author>>;
};

export type GraphCms_PostAuthorsArgs = {
  where?: Maybe<GraphCms_AuthorWhereInput>;
  orderBy?: Maybe<GraphCms_AuthorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type GraphCms_PostConnection = {
  __typename?: 'GraphCMS_PostConnection';
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<GraphCms_PostEdge>>;
  aggregate: GraphCms_AggregatePost;
};

export type GraphCms_PostCreateInput = {
  status?: Maybe<GraphCms_Status>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  dateAndTime?: Maybe<Scalars['GraphCMS_DateTime']>;
  tags?: Maybe<GraphCms_PostCreatetagsInput>;
  coverImage?: Maybe<GraphCms_AssetCreateOneWithoutCoverImagePostInput>;
  authors?: Maybe<GraphCms_AuthorCreateManyWithoutPostsInput>;
};

export type GraphCms_PostCreateManyWithoutAuthorsInput = {
  create?: Maybe<Array<GraphCms_PostCreateWithoutAuthorsInput>>;
  connect?: Maybe<Array<GraphCms_PostWhereUniqueInput>>;
};

export type GraphCms_PostCreateManyWithoutCoverImageInput = {
  create?: Maybe<Array<GraphCms_PostCreateWithoutCoverImageInput>>;
  connect?: Maybe<Array<GraphCms_PostWhereUniqueInput>>;
};

export type GraphCms_PostCreatetagsInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type GraphCms_PostCreateWithoutAuthorsInput = {
  status?: Maybe<GraphCms_Status>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  dateAndTime?: Maybe<Scalars['GraphCMS_DateTime']>;
  tags?: Maybe<GraphCms_PostCreatetagsInput>;
  coverImage?: Maybe<GraphCms_AssetCreateOneWithoutCoverImagePostInput>;
};

export type GraphCms_PostCreateWithoutCoverImageInput = {
  status?: Maybe<GraphCms_Status>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  dateAndTime?: Maybe<Scalars['GraphCMS_DateTime']>;
  tags?: Maybe<GraphCms_PostCreatetagsInput>;
  authors?: Maybe<GraphCms_AuthorCreateManyWithoutPostsInput>;
};

/** An edge in a connection. */
export type GraphCms_PostEdge = {
  __typename?: 'GraphCMS_PostEdge';
  /** The item at the end of the edge. */
  node: GraphCms_Post;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum GraphCms_PostOrderByInput {
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  DateAndTimeAsc = 'dateAndTime_ASC',
  DateAndTimeDesc = 'dateAndTime_DESC',
}

export type GraphCms_PostPreviousValues = {
  __typename?: 'GraphCMS_PostPreviousValues';
  status: GraphCms_Status;
  updatedAt: Scalars['GraphCMS_DateTime'];
  createdAt: Scalars['GraphCMS_DateTime'];
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  tags: Array<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  dateAndTime?: Maybe<Scalars['GraphCMS_DateTime']>;
};

export type GraphCms_PostScalarWhereInput = {
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_PostScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_PostScalarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_PostScalarWhereInput>>;
  status?: Maybe<GraphCms_Status>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<GraphCms_Status>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<GraphCms_Status>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<GraphCms_Status>>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  slug_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  slug_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  slug_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  slug_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  content_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  content_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  content_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  content_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  content_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  content_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  content_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  content_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  content_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  content_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  content_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  content_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  content_not_ends_with?: Maybe<Scalars['String']>;
  dateAndTime?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  dateAndTime_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  dateAndTime_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  dateAndTime_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  dateAndTime_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  dateAndTime_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  dateAndTime_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  dateAndTime_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
};

export type GraphCms_PostSubscriptionPayload = {
  __typename?: 'GraphCMS_PostSubscriptionPayload';
  mutation: GraphCms_MutationType;
  node?: Maybe<GraphCms_Post>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<GraphCms_PostPreviousValues>;
};

export type GraphCms_PostSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_PostSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_PostSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_PostSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<GraphCms_MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<GraphCms_PostWhereInput>;
};

export type GraphCms_PostUpdateInput = {
  status?: Maybe<GraphCms_Status>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  dateAndTime?: Maybe<Scalars['GraphCMS_DateTime']>;
  tags?: Maybe<GraphCms_PostUpdatetagsInput>;
  coverImage?: Maybe<GraphCms_AssetUpdateOneWithoutCoverImagePostInput>;
  authors?: Maybe<GraphCms_AuthorUpdateManyWithoutPostsInput>;
};

export type GraphCms_PostUpdateManyDataInput = {
  status?: Maybe<GraphCms_Status>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  dateAndTime?: Maybe<Scalars['GraphCMS_DateTime']>;
  tags?: Maybe<GraphCms_PostUpdatetagsInput>;
};

export type GraphCms_PostUpdateManyMutationInput = {
  status?: Maybe<GraphCms_Status>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  dateAndTime?: Maybe<Scalars['GraphCMS_DateTime']>;
  tags?: Maybe<GraphCms_PostUpdatetagsInput>;
};

export type GraphCms_PostUpdateManyWithoutAuthorsInput = {
  create?: Maybe<Array<GraphCms_PostCreateWithoutAuthorsInput>>;
  connect?: Maybe<Array<GraphCms_PostWhereUniqueInput>>;
  set?: Maybe<Array<GraphCms_PostWhereUniqueInput>>;
  disconnect?: Maybe<Array<GraphCms_PostWhereUniqueInput>>;
  delete?: Maybe<Array<GraphCms_PostWhereUniqueInput>>;
  update?: Maybe<Array<GraphCms_PostUpdateWithWhereUniqueWithoutAuthorsInput>>;
  updateMany?: Maybe<Array<GraphCms_PostUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<GraphCms_PostScalarWhereInput>>;
  upsert?: Maybe<Array<GraphCms_PostUpsertWithWhereUniqueWithoutAuthorsInput>>;
};

export type GraphCms_PostUpdateManyWithoutCoverImageInput = {
  create?: Maybe<Array<GraphCms_PostCreateWithoutCoverImageInput>>;
  connect?: Maybe<Array<GraphCms_PostWhereUniqueInput>>;
  set?: Maybe<Array<GraphCms_PostWhereUniqueInput>>;
  disconnect?: Maybe<Array<GraphCms_PostWhereUniqueInput>>;
  delete?: Maybe<Array<GraphCms_PostWhereUniqueInput>>;
  update?: Maybe<Array<GraphCms_PostUpdateWithWhereUniqueWithoutCoverImageInput>>;
  updateMany?: Maybe<Array<GraphCms_PostUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<GraphCms_PostScalarWhereInput>>;
  upsert?: Maybe<Array<GraphCms_PostUpsertWithWhereUniqueWithoutCoverImageInput>>;
};

export type GraphCms_PostUpdateManyWithWhereNestedInput = {
  where: GraphCms_PostScalarWhereInput;
  data: GraphCms_PostUpdateManyDataInput;
};

export type GraphCms_PostUpdatetagsInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type GraphCms_PostUpdateWithoutAuthorsDataInput = {
  status?: Maybe<GraphCms_Status>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  dateAndTime?: Maybe<Scalars['GraphCMS_DateTime']>;
  tags?: Maybe<GraphCms_PostUpdatetagsInput>;
  coverImage?: Maybe<GraphCms_AssetUpdateOneWithoutCoverImagePostInput>;
};

export type GraphCms_PostUpdateWithoutCoverImageDataInput = {
  status?: Maybe<GraphCms_Status>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  dateAndTime?: Maybe<Scalars['GraphCMS_DateTime']>;
  tags?: Maybe<GraphCms_PostUpdatetagsInput>;
  authors?: Maybe<GraphCms_AuthorUpdateManyWithoutPostsInput>;
};

export type GraphCms_PostUpdateWithWhereUniqueWithoutAuthorsInput = {
  where: GraphCms_PostWhereUniqueInput;
  data: GraphCms_PostUpdateWithoutAuthorsDataInput;
};

export type GraphCms_PostUpdateWithWhereUniqueWithoutCoverImageInput = {
  where: GraphCms_PostWhereUniqueInput;
  data: GraphCms_PostUpdateWithoutCoverImageDataInput;
};

export type GraphCms_PostUpsertWithWhereUniqueWithoutAuthorsInput = {
  where: GraphCms_PostWhereUniqueInput;
  update: GraphCms_PostUpdateWithoutAuthorsDataInput;
  create: GraphCms_PostCreateWithoutAuthorsInput;
};

export type GraphCms_PostUpsertWithWhereUniqueWithoutCoverImageInput = {
  where: GraphCms_PostWhereUniqueInput;
  update: GraphCms_PostUpdateWithoutCoverImageDataInput;
  create: GraphCms_PostCreateWithoutCoverImageInput;
};

export type GraphCms_PostWhereInput = {
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GraphCms_PostWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GraphCms_PostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GraphCms_PostWhereInput>>;
  status?: Maybe<GraphCms_Status>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<GraphCms_Status>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<GraphCms_Status>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<GraphCms_Status>>;
  updatedAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  createdAt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  slug_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  slug_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  slug_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  slug_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  content_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  content_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  content_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  content_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  content_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  content_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  content_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  content_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  content_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  content_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  content_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  content_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  content_not_ends_with?: Maybe<Scalars['String']>;
  dateAndTime?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  dateAndTime_not?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  dateAndTime_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values that are not contained in given list. */
  dateAndTime_not_in?: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  dateAndTime_lt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  dateAndTime_lte?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  dateAndTime_gt?: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  dateAndTime_gte?: Maybe<Scalars['GraphCMS_DateTime']>;
  coverImage?: Maybe<GraphCms_AssetWhereInput>;
  authors_every?: Maybe<GraphCms_AuthorWhereInput>;
  authors_some?: Maybe<GraphCms_AuthorWhereInput>;
  authors_none?: Maybe<GraphCms_AuthorWhereInput>;
};

export type GraphCms_PostWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export enum GraphCms_Status {
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
  Archived = 'ARCHIVED',
}

export type GraphQlSource = Node & {
  __typename?: 'GraphQLSource';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  typeName?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
};

export type GraphQlSourceConnection = {
  __typename?: 'GraphQLSourceConnection';
  totalCount: Scalars['Int'];
  edges: Array<GraphQlSourceEdge>;
  nodes: Array<GraphQlSource>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<GraphQlSourceGroupConnection>;
};

export type GraphQlSourceConnectionDistinctArgs = {
  field: GraphQlSourceFieldsEnum;
};

export type GraphQlSourceConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: GraphQlSourceFieldsEnum;
};

export type GraphQlSourceEdge = {
  __typename?: 'GraphQLSourceEdge';
  next?: Maybe<GraphQlSource>;
  node: GraphQlSource;
  previous?: Maybe<GraphQlSource>;
};

export enum GraphQlSourceFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  TypeName = 'typeName',
  FieldName = 'fieldName',
}

export type GraphQlSourceFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  typeName?: Maybe<StringQueryOperatorInput>;
  fieldName?: Maybe<StringQueryOperatorInput>;
};

export type GraphQlSourceGroupConnection = {
  __typename?: 'GraphQLSourceGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<GraphQlSourceEdge>;
  nodes: Array<GraphQlSource>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GraphQlSourceSortInput = {
  fields?: Maybe<Array<Maybe<GraphQlSourceFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  graphQlSource?: Maybe<GraphQlSource>;
  allGraphQlSource: GraphQlSourceConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  gcms: GraphCms;
};

export type QueryGraphQlSourceArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  typeName?: Maybe<StringQueryOperatorInput>;
  fieldName?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllGraphQlSourceArgs = {
  filter?: Maybe<GraphQlSourceFilterInput>;
  sort?: Maybe<GraphQlSourceSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySiteArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePageArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  __typename?: 'Site';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  buildTime?: Maybe<Scalars['Date']>;
};

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SiteMetadataTitle = 'siteMetadata___title',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  BuildTime = 'buildTime',
}

export type SiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  path?: Maybe<Scalars['String']>;
  internalComponentName?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  componentChunkName?: Maybe<Scalars['String']>;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  __typename?: 'SitePageContext';
  slug?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Path = 'path',
  InternalComponentName = 'internalComponentName',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextSlug = 'context___slug',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsTypeName = 'pluginCreator___pluginOptions___typeName',
  PluginCreatorPluginOptionsFieldName = 'pluginCreator___pluginOptions___fieldName',
  PluginCreatorPluginOptionsUrl = 'pluginCreator___pluginOptions___url',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsIcons = 'pluginCreator___pluginOptions___icons',
  PluginCreatorPluginOptionsIconsSrc = 'pluginCreator___pluginOptions___icons___src',
  PluginCreatorPluginOptionsIconsSizes = 'pluginCreator___pluginOptions___icons___sizes',
  PluginCreatorPluginOptionsIconsType = 'pluginCreator___pluginOptions___icons___type',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
}

export type SitePageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsTypeName = 'pluginOptions___typeName',
  PluginOptionsFieldName = 'pluginOptions___fieldName',
  PluginOptionsUrl = 'pluginOptions___url',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcons = 'pluginOptions___icons',
  PluginOptionsIconsSrc = 'pluginOptions___icons___src',
  PluginOptionsIconsSizes = 'pluginOptions___icons___sizes',
  PluginOptionsIconsType = 'pluginOptions___icons___type',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords',
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  typeName?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icons?: Maybe<Array<Maybe<SitePluginPluginOptionsIcons>>>;
  path?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  typeName?: Maybe<StringQueryOperatorInput>;
  fieldName?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icons?: Maybe<SitePluginPluginOptionsIconsFilterListInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsIcons = {
  __typename?: 'SitePluginPluginOptionsIcons';
  src?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsIconsFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsIconsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsIconsFilterInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  title?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type GetSiteQueryVariables = {};

export type GetSiteQuery = { __typename?: 'Query' } & {
  site: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata: Maybe<{ __typename?: 'SiteSiteMetadata' } & Pick<SiteSiteMetadata, 'title'>>;
    }
  >;
};

export type GetAllAuthorsQueryVariables = {};

export type GetAllAuthorsQuery = { __typename?: 'Query' } & {
  gcms: { __typename?: 'GraphCMS' } & {
    allAuthors: { __typename?: 'GraphCMS_AuthorConnection' } & {
      edges: Array<
        Maybe<
          { __typename?: 'GraphCMS_AuthorEdge' } & {
            node: { __typename?: 'GraphCMS_Author' } & Pick<GraphCms_Author, 'id' | 'name' | 'bibliography'> & {
                avatar: Maybe<{ __typename?: 'GraphCMS_Asset' } & Pick<GraphCms_Asset, 'handle'>>;
              };
          }
        >
      >;
    };
  };
};

export type GetAllPostsQueryVariables = {};

export type GetAllPostsQuery = { __typename?: 'Query' } & {
  gcms: { __typename?: 'GraphCMS' } & {
    allPosts: { __typename?: 'GraphCMS_PostConnection' } & {
      edges: Array<
        Maybe<
          { __typename?: 'GraphCMS_PostEdge' } & {
            node: { __typename?: 'GraphCMS_Post' } & Pick<GraphCms_Post, 'id' | 'title' | 'slug'> & {
                coverImage: Maybe<{ __typename?: 'GraphCMS_Asset' } & Pick<GraphCms_Asset, 'handle'>>;
              };
          }
        >
      >;
    };
  };
};

export type GetPostsQueryVariables = {
  slug: Scalars['String'];
};

export type GetPostsQuery = { __typename?: 'Query' } & {
  gcms: { __typename?: 'GraphCMS' } & {
    posts: Array<
      Maybe<
        { __typename?: 'GraphCMS_Post' } & Pick<GraphCms_Post, 'id' | 'slug' | 'title' | 'content'> & {
            coverImage: Maybe<{ __typename?: 'GraphCMS_Asset' } & Pick<GraphCms_Asset, 'handle'>>;
          }
      >
    >;
  };
};
