/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommonResponse_long_ } from '../models/CommonResponse_long_';
import type { CommonResponse_Page_QuestionSubmitVO_ } from '../models/CommonResponse_Page_QuestionSubmitVO_';
import type { QuestionSubmitAddRequest } from '../models/QuestionSubmitAddRequest';
import type { QuestionSubmitQueryRequest } from '../models/QuestionSubmitQueryRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class QuestionSubmitService {

    /**
     * doQuestionSubmit
     * @param questionSubmitAddRequest questionSubmitAddRequest
     * @param creationTime 
     * @param id 
     * @param lastAccessedTime 
     * @param maxInactiveInterval 
     * @param _new 
     * @param valueNames 
     * @returns CommonResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static doQuestionSubmitUsingPost(
questionSubmitAddRequest: QuestionSubmitAddRequest,
creationTime?: number,
id?: string,
lastAccessedTime?: number,
maxInactiveInterval?: number,
_new?: boolean,
valueNames?: Array<string>,
): CancelablePromise<CommonResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/question-submit/',
            query: {
                'creationTime': creationTime,
                'id': id,
                'lastAccessedTime': lastAccessedTime,
                'maxInactiveInterval': maxInactiveInterval,
                'new': _new,
                'valueNames': valueNames,
            },
            body: questionSubmitAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * listQuestionSubmitByPage
     * @param questionSubmitQueryRequest questionSubmitQueryRequest
     * @param creationTime 
     * @param id 
     * @param lastAccessedTime 
     * @param maxInactiveInterval 
     * @param _new 
     * @param valueNames 
     * @returns CommonResponse_Page_QuestionSubmitVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listQuestionSubmitByPageUsingPost(
questionSubmitQueryRequest: QuestionSubmitQueryRequest,
creationTime?: number,
id?: string,
lastAccessedTime?: number,
maxInactiveInterval?: number,
_new?: boolean,
valueNames?: Array<string>,
): CancelablePromise<CommonResponse_Page_QuestionSubmitVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/question-submit/list/page',
            query: {
                'creationTime': creationTime,
                'id': id,
                'lastAccessedTime': lastAccessedTime,
                'maxInactiveInterval': maxInactiveInterval,
                'new': _new,
                'valueNames': valueNames,
            },
            body: questionSubmitQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
