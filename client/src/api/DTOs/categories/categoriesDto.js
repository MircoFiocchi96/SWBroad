export default class CategotyDto {
  name;
  description;
  like;

  constructor(dto) {
    this.name = dto.name;
    this.description = dto.description;
    this.like = dto.like;
  }
}
