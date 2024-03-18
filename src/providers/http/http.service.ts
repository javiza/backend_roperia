import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { firstValueFrom } from "rxjs";

@Injectable()
export class HttpCustomService {
  constructor(private readonly httService: HttpService) {}
  public async apiFinAll() {
    const response = await firstValueFrom(
      this.httService.get("http://localhost:3000/")
    );
    return response.data;
  }
}
