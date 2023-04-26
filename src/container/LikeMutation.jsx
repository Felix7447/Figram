import React from "react";
import { gql, useMutation } from "@apollo/client";
import { PhotoComponent } from "../components/PhotoComponent";
import { Loading } from "../components/Loading";
import { ErrorMessage } from "../components/ErrorMessage";

const LIKE_PHOTO = gql`
  mutation likePhoto($photo: ID!) {
    likePhoto(input: $photo) {
      id
      likes
      liked
    }
  }
`

export const Photo = ({ photoData }) => {
  const [ like, { data, loading, error } ] = useMutation(LIKE_PHOTO)

  if (loading) return <Loading size='48px' height='60vh'/>
  if (error) return <ErrorMessage title={error.name} height='60vh'>{error.message}</ErrorMessage>

  const handleLike = (photo) => {
    like({
      variables: { photo }
    }).then(data => console.log(data))
  }

  return <PhotoComponent handleLike={handleLike} {...photoData} />
}