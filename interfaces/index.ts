// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export type IPage = {
  content: string,
  id: number,
  title: string,
  parent: {title: string, id: number}
  children: {title: string, id: number}[]
  parent_id: number,
  topics: {id: number, text: string}[]
}

export type ITag = {
  id: number,
  text: string,
  count: number
}