class StreamDto {
  id;
  title;
  category;
  description;
  startDate;
  endDate;
  filename;
  nickname;
  avatar;
  viewers;
  viewersCount;

  constructor(dto) {
    this.id = dto.id;
    this.category = dto.category;
    this.description = dto.description;
    this.startDate = dto.startDate;
    this.endDate = dto.endDate;
    this.filename = dto.filename;
    this.nickname = dto.nickname;
    this.avatar = dto.avatar;
    this.viewers = dto.viewers;
    this.viewersCount = dto.viewersCount;
  }

  getViewersCount() {
    return this.viewersCount || this.viewers.length;
  }
}
