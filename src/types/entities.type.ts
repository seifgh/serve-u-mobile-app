export type TimeStampEntity = {
  createdAt: Date;
  updatedAt: Date;
};

export type BaseEntity = TimeStampEntity & {
  id: string;
};

export type FileEntity = BaseEntity & {
  path: string;
};
