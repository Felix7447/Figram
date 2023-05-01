import { gql, useQuery } from "@apollo/client";

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`;

const FavName = {
  1: "cats",
  2: "dogs",
  3: "hamsters",
  4: "rabbits",
  5: "birds",
  6: "fishes",
};

const getFavCategory = (array) => {
  let sum = 0;
  let moreLiked = 0;
  let fav = 0;

  array.reduce((previous, current, index) => {
    if (previous === current) {
      sum++;
      if (index == array.length - 1 && sum > moreLiked) {
        fav = previous;
      }
    } else if (sum > moreLiked) {
      moreLiked = sum;
      fav = previous;
      sum = 0;
    }

    return current;
  });

  if (fav != 0) {
    return fav;
  } else {
    return "none";
  }
};

export const useGetFavs = () => {
  const { data, loading, error } = useQuery(GET_FAVS, {
    fetchPolicy: "network-only",
  });
  const favs = data?.favs;

  const favCategory = () => {
    const arrayCategoryId = favs?.map((fav) => fav.categoryId);
    arrayCategoryId?.sort((a, b) => a - b);

    if (arrayCategoryId?.length > 0) {
      return FavName[getFavCategory(arrayCategoryId)];
    } else {
      return "none";
    }
  };

  return {
    favCategory,
    data,
    loading,
    error,
  };
};
