export default class streamQuery {
  category;
  page;
  limit;
  finished;
  q;

  constructor(params) {
    this.category = params.category;
    this.page = params.page;
    this.limit = params.limit;
    this.finished = params.finished;
    this.q = params.q;
  }
}
