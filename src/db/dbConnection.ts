import pool from './pool';

const query = (queryText: string, queryParams: any) => {
    return new Promise((resolve, reject) => {
        pool.query(queryText, queryParams).then(res => {
            resolve(res);
        })
        .catch(err => {
            reject(err);
        });
    });
};

export default query;

