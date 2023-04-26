import React from "react";
import { gql, useMutation } from "@apollo/client";
import { PhotoIcons } from "../components/PhotoIcons"
import { Loading } from "../components/Loading";
import { ErrorMessage } from "../components/ErrorMessage";

const LIKE_PHOTO = gql`
  mutation likePhoto($photo: LikePhoto!) {
    likePhoto(input: $photo) {
      id
      likes
      liked
    }
  }
`

export const LikeMutation = ({ id, likes, liked }) => {
  const [ like, { data, loading, error } ] = useMutation(LIKE_PHOTO)

  const handleLike = (photo) => (
    like({
      variables: { photo }
    })
  )

  return <PhotoIcons id={id} likes={likes} liked={liked} handleLike={handleLike} />
}