import { NextFunction, Request, Response } from 'express';
import { queryList } from '../db/dbQuery';
import { dbQuery } from '../db/connection';
import { QueryResult } from '../util/QueryResult';

export const getBookList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    var getQuery = new queryList();
    var bookListQuery = getQuery.GET_BOOK_LIST_QUERY;
    var result = (await dbQuery(bookListQuery)) as QueryResult;

    return res.status(200).send(JSON.stringify(result.rows));
  } catch (error) {
    console.log('Error' + error);
    return res.status(500).send({ error: 'Failed to list book' });
  }
};

export const getDetailsList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    try {
        var bookId = req.params.id;
    var getQuery = new queryList();
    var bookDetailsQuery = getQuery.GET_BOOK_DETAILS_QUERY;
    var result = (await dbQuery(bookDetailsQuery, [bookId])) as QueryResult;
    return res.status(200).send(JSON.stringify(result.rows[0]));
  } catch (error) {
    console.log('Error' + error);
    return res.status(500).send({ error: 'Failed to list book' });
  }
};
