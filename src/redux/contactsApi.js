import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  tagTypes: ['contact'],
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://63b67deb58084a7af3b3c24c.mockapi.io/contacts/'
    // baseUrl: 'https://6363c1b38a3337d9a2e6d982.mockapi.io/contacts/'
    baseUrl: 'https://63664b45046eddf1bafcedd9.mockapi.io/',

  }),
  // tagTypes: ['Contact'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => 'contacts',
      providesTags: ['Contact']
    }),
    addContact: builder.mutation({
      query: newContact => ({
        url: 'contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contact']
    }),
    deleteContact: builder.mutation({
      query: Id => ({
        url: `contacts/${Id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    })
  })
})

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation
} = contactsApi