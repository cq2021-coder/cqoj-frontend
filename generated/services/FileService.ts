/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommonResponse_string_ } from '../models/CommonResponse_string_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FileService {

    /**
     * 获取临时文件访问链接
     * @param key key
     * @returns CommonResponse_string_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static getTempAccessUsingPost(
key?: string,
): CancelablePromise<CommonResponse_string_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/file/tmp',
            query: {
                'key': key,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 上传文件
     * @param file
     * @returns CommonResponse_string_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static uploadUsingPost(
file?: Blob,
): CancelablePromise<CommonResponse_string_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/file/upload',
            formData: {
                'file': file,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
