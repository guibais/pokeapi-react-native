import {
  QueryClient,
  QueryClientProvider,
  QueryKey,
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from "react-query";
import Toast from "react-native-toast-message";
import { useTranslation } from "react-i18next";

export const errorHandler = async (error: unknown) => {
  const { t } = useTranslation();
  const genericErrorMessage = t("error.generic");
  const hasGenericToastError = !!Array.prototype.slice
    .call(document.getElementsByTagName("span"))
    .filter((el) => el.textContent.trim() === genericErrorMessage.trim())
    .length;

  if (!hasGenericToastError)
    Toast.show({
      type: "error",
      text1: "error",
      text2: genericErrorMessage,
    });
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: errorHandler,
    },
    mutations: {
      onError: errorHandler,
    },
  },
});

export {
  QueryClientProvider,
  queryClient,
  useMutation,
  useQuery,
  UseQueryOptions,
  useQueryClient,
  QueryKey,
};
