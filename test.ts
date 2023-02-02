import { Merger } from './merge';

let merger = new Merger();

test('merge two sorted arrays', () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [2, 4, 6];
    expect(merger.merge(collection_1, collection_2)).toStrictEqual([1, 2, 3, 4, 5, 6]);
});

test('merge two arrays with array one being empty', () => {
    const collection_1:number[] = [];
    const collection_2 = [1, 2, 3];
    expect(merger.merge(collection_1, collection_2)).toStrictEqual([1, 2, 3]);
});

test('merge two arrays with array two being empty', () => {
    const collection_1 = [1, 2, 3];
    const collection_2:number[] = [];
    expect(merger.merge(collection_1, collection_2)).toStrictEqual([1, 2, 3]);
});

test('merge two arrays with different lengths', () => {
    const collection_1 = [1, 2, 3, 4];
    const collection_2 = [5, 6];
    expect(merger.merge(collection_1, collection_2)).toStrictEqual([1, 2, 3, 4, 5, 6]);
});