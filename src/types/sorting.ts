export enum SortingType {
  DATE = "DATE",
  STATUS = "STATUS"
}

export enum SortingOrder {
  ASC = "ASC",
  DESC = "DESC"
}

export interface Sorting {
  type: SortingType
  order: SortingOrder
}
