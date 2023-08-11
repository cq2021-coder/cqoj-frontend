/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommonResponse_boolean_ } from '../models/CommonResponse_boolean_';
import type { CommonResponse_long_ } from '../models/CommonResponse_long_';
import type { CommonResponse_Page_Question_ } from '../models/CommonResponse_Page_Question_';
import type { CommonResponse_Page_QuestionVO_ } from '../models/CommonResponse_Page_QuestionVO_';
import type { CommonResponse_QuestionVO_ } from '../models/CommonResponse_QuestionVO_';
import type { DeleteRequest } from '../models/DeleteRequest';
import type { QuestionAddRequest } from '../models/QuestionAddRequest';
import type { QuestionEditRequest } from '../models/QuestionEditRequest';
import type { QuestionQueryRequest } from '../models/QuestionQueryRequest';
import type { QuestionUpdateRequest } from '../models/QuestionUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class QuestionService {

    /**
     * addQuestion
     * @param questionAddRequest questionAddRequest
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
    public static addQuestionUsingPost(
questionAddRequest: QuestionAddRequest,
creationTime?: number,
id?: string,
lastAccessedTime?: number,
maxInactiveInterval?: number,
_new?: boolean,
valueNames?: Array<string>,
): CancelablePromise<CommonResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/question/add',
            query: {
                'creationTime': creationTime,
                'id': id,
                'lastAccessedTime': lastAccessedTime,
                'maxInactiveInterval': maxInactiveInterval,
                'new': _new,
                'valueNames': valueNames,
            },
            body: questionAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteQuestion
     * @param deleteRequest deleteRequest
     * @param creationTime 
     * @param id 
     * @param lastAccessedTime 
     * @param maxInactiveInterval 
     * @param _new 
     * @param valueNames 
     * @returns CommonResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deleteQuestionUsingPost(
deleteRequest: DeleteRequest,
creationTime?: number,
id?: string,
lastAccessedTime?: number,
maxInactiveInterval?: number,
_new?: boolean,
valueNames?: Array<string>,
): CancelablePromise<CommonResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/question/delete',
            query: {
                'creationTime': creationTime,
                'id': id,
                'lastAccessedTime': lastAccessedTime,
                'maxInactiveInterval': maxInactiveInterval,
                'new': _new,
                'valueNames': valueNames,
            },
            body: deleteRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * editQuestion
     * @param questionEditRequest questionEditRequest
     * @param creationTime 
     * @param id 
     * @param lastAccessedTime 
     * @param maxInactiveInterval 
     * @param _new 
     * @param valueNames 
     * @returns CommonResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static editQuestionUsingPost(
questionEditRequest: QuestionEditRequest,
creationTime?: number,
id?: string,
lastAccessedTime?: number,
maxInactiveInterval?: number,
_new?: boolean,
valueNames?: Array<string>,
): CancelablePromise<CommonResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/question/edit',
            query: {
                'creationTime': creationTime,
                'id': id,
                'lastAccessedTime': lastAccessedTime,
                'maxInactiveInterval': maxInactiveInterval,
                'new': _new,
                'valueNames': valueNames,
            },
            body: questionEditRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getQuestionVoById
     * @param id id
     * @returns CommonResponse_QuestionVO_ OK
     * @throws ApiError
     */
    public static getQuestionVoByIdUsingGet(
id?: number,
): CancelablePromise<CommonResponse_QuestionVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/question/get/vo',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * listQuestionByPage
     * @param questionQueryRequest questionQueryRequest
     * @returns CommonResponse_Page_Question_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listQuestionByPageUsingPost(
questionQueryRequest: QuestionQueryRequest,
): CancelablePromise<CommonResponse_Page_Question_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/question/list/page',
            body: questionQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * listQuestionVoByPage
     * @param questionQueryRequest questionQueryRequest
     * @returns CommonResponse_Page_QuestionVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listQuestionVoByPageUsingPost(
questionQueryRequest: QuestionQueryRequest,
): CancelablePromise<CommonResponse_Page_QuestionVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/question/list/page/vo',
            body: questionQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * listMyQuestionVoByPage
     * @param questionQueryRequest questionQueryRequest
     * @param creationTime 
     * @param id 
     * @param lastAccessedTime 
     * @param maxInactiveInterval 
     * @param _new 
     * @param valueNames 
     * @returns CommonResponse_Page_QuestionVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listMyQuestionVoByPageUsingPost(
questionQueryRequest: QuestionQueryRequest,
creationTime?: number,
id?: string,
lastAccessedTime?: number,
maxInactiveInterval?: number,
_new?: boolean,
valueNames?: Array<string>,
): CancelablePromise<CommonResponse_Page_QuestionVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/question/my/list/page/vo',
            query: {
                'creationTime': creationTime,
                'id': id,
                'lastAccessedTime': lastAccessedTime,
                'maxInactiveInterval': maxInactiveInterval,
                'new': _new,
                'valueNames': valueNames,
            },
            body: questionQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateQuestion
     * @param questionUpdateRequest questionUpdateRequest
     * @returns CommonResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateQuestionUsingPost(
questionUpdateRequest: QuestionUpdateRequest,
): CancelablePromise<CommonResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/question/update',
            body: questionUpdateRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
