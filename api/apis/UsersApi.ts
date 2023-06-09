/* tslint:disable */
/* eslint-disable */
/**
 * Rss-back
 * Documentation
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from "../runtime";
import type { CreateUserDto, User } from "../models";
import {
  CreateUserDtoFromJSON,
  CreateUserDtoToJSON,
  UserFromJSON,
  UserToJSON,
} from "../models";

export interface UsersControllerCreateUserRequest {
  createUserDto: CreateUserDto;
}

/**
 *
 */
export class UsersApi extends runtime.BaseAPI {
  /**
   * User creation
   */
  async usersControllerCreateUserRaw(
    requestParameters: UsersControllerCreateUserRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<User>> {
    if (
      requestParameters.createUserDto === null ||
      requestParameters.createUserDto === undefined
    ) {
      throw new runtime.RequiredError(
        "createUserDto",
        "Required parameter requestParameters.createUserDto was null or undefined when calling usersControllerCreateUser."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/users`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: CreateUserDtoToJSON(requestParameters.createUserDto),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UserFromJSON(jsonValue)
    );
  }

  /**
   * User creation
   */
  async usersControllerCreateUser(
    requestParameters: UsersControllerCreateUserRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<User> {
    const response = await this.usersControllerCreateUserRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * All Users getting
   */
  async usersControllerGetAllUsersRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Array<User>>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/users`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(UserFromJSON)
    );
  }

  /**
   * All Users getting
   */
  async usersControllerGetAllUsers(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Array<User>> {
    const response = await this.usersControllerGetAllUsersRaw(initOverrides);
    return await response.value();
  }
}
