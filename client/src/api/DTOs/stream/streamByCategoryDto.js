import StreamDto from './streamDto';
​
export default class StreamsByCategoryDto {
  category;
  streams;
​
  constructor(dto) {
    this.category = dto.category;
    this.streams = dto.map((s) => new StreamDto(s));
  }
}
​