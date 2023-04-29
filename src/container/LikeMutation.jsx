import React from "react";
import { gql, useMutation } from "@apollo/client";
import { PhotoIcons } from "../components/PhotoIcons"

const LIKE_PHOTO = gql`
  mutation likePhoto($photo: LikePhoto!) {
    likePhoto(input: $photo) {
      id
      likes
      liked
    }
  }
`

export const LikeMutation = (props) => {
  const [ like, { _data, _loading, error} ] = useMutation(LIKE_PHOTO)

  if (error) {
    alert(error.message)
  } 

  const handleLike = (photo) => (
    like({
      variables: { photo }
    })
  )

  return <PhotoIcons {...props} handleLike={handleLike} />
}