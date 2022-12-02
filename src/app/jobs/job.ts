export class Job {

 constructor(
  public id: number,
  public username: string,
  public title: string,
  public email: string,
  public description: string,
  public category: string,
  public date: string,
  public expiration: string,
 ) { }
}
