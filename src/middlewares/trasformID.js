import { ObjectId } from 'mongoose';

export function transformarID(obj) {
    const objectId = new ObjectId(obj);
    console.log(typeof objectId)
    return objectId;
}