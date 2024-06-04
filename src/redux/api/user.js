import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import server from '../../constant'

const api = createApi({
    reducerPath: 'user',
    baseQuery: fetchBaseQuery({ baseUrl: `${server}/user` }),
    endpoints: ({ mutation, query }) => ({
        getUser: query({
            query: () => ({
                url: '/me',
                credentials: 'include'
            }),
        }),
        allUsers: query({
            query: () => ({
                url: '/admin/users',
                credentials: 'include'
            }),
        }),
        getUserProfile: query({
            query: id => ({
                url: `/admin/user/${id}`,
                credentials: 'include'
            }),
        }),
        updateProfile: mutation({
            query: data => ({
                url: `/updateprofile`,
                method: `PUT`,
                body: data,
                credentials: 'include'
            }),
        }),
        updateRole: mutation({
            query: ({ id, role }) => ({
                url: `/admin/updaterole/${id}`,
                method: `PUT`,
                body: { role },
                credentials: 'include'
            }),
        }),
        changePassword: mutation({
            query: ({ old, newP, cPass }) => ({
                url: `/updatepassword`,
                method: `PUT`,
                body: { old, newP, cPass },
                credentials: 'include'
            }),
        }),
        forgotPassword: mutation({
            query: email => ({
                url: `/forgotpassword`,
                method: `POST`,
                body: { email },
                credentials: 'include'
            }),
        }),
        resetPassword: mutation({
            query: ({ token, password }) => ({
                url: `/resetpassword/${token}`,
                method: `PUT`,
                body: { password },
                credentials: 'include'
            }),
        }),
        getShipInfo: query({
            query: () => ({
                url: `/getship`,
                credentials: 'include'
            }),
        }),
        updateShip: mutation({
            query: ({ address, city, state, country, pincode, phone }) => ({
                url: `/update-ship`,
                method: `PUT`,
                body: { address, city, state, country, pincode, phone },
                credentials: 'include'
            }),
        }),
    })
})

export default api
export const { useAllUsersQuery, useChangePasswordMutation, useForgotPasswordMutation, useGetShipInfoQuery, useGetUserProfileQuery, useGetUserQuery, useResetPasswordMutation, useUpdateProfileMutation, useUpdateRoleMutation, useUpdateShipMutation, useLazyGetUserQuery } = api