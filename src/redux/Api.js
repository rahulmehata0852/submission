import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const API = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://submission-server.onrender.com"
        //  baseUrl: "http://localhost:5000"
    }),
    tagTypes: ["api"],

    endpoints: builder => {
        return {

            GetData: builder.query({
                query: arg => {
                    return {
                        url: "https://picsum.photos/v2/list?page=1&limit=6",
                        method: "GET"
                    }
                }
            }),


            AddData: builder.mutation({
                query: data => {
                    console.warn(data);
                    return {
                        url: "/data",
                        method: "POST",
                        body: data
                    }
                },
                invalidatesTags: ["api"]
            }),

            getUserdata: builder.query({
                query: arg => {
                    return {
                        url: "/data",
                        method: "GET"
                    }
                },
                providesTags: ["api"]
            }),


            DeleteUserdata: builder.mutation({
                query: id => {
                    return {
                        url: `/data/${id}`,
                        method: "DELETE",

                    }
                },
                invalidatesTags: ["api"]
            }),

            UpdateUserdata: builder.mutation({
                query: data => {
                    return {
                        url: `/data/${data.id}`,
                        method: "PUT",
                        body: data

                    }
                },
                invalidatesTags: ["api"]
            }),



        }

    }

})


export const { useGetDataQuery, useAddDataMutation, useGetUserdataQuery, useDeleteUserdataMutation, useUpdateUserdataMutation } = API



