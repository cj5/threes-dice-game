import { Injectable } from '@nestjs/common';

const data = [
  {
    id: 1,
    name: 'Chris'
  },
  {
    id: 2,
    name: 'John'
  },
  {
    id: 3,
    name: 'Alex'
  },
]

@Injectable()
export class AppService {
  getData(): Array<any> {
    return data;
  }
}
