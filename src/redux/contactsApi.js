import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  tagTypes: ['contact'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63b67deb58084a7af3b3c24c.mockapi.io/contacts/'
  }),
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => 'contacts',
      providesTags: ['Contact']
    }),
    createContact: builder.mutation({
      query: body => ({
        url: 'contacts',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Contact']
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    })
  })
})

export const {
  useFetchContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation
} = contactsApi