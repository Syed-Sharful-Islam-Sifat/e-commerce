import { useActionDispatcher } from "@/hooks/use-action-dispatcher";
import userActions from "@/lib/actions/user-action";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Verification() {
  const router = useRouter();
  const { tokenId } = router.query;

  const [state, dispatch] = useActionDispatcher({
    isVerified: false,
  });
  useEffect(() => {
    if (tokenId && !state.isVerified)
      dispatch(userActions.VERIFY_USER, { tokenId }, state);
  }, [tokenId]);

  const successfull = () => <div>Successfully Verified</div>;

  const unSuccessfull = () => <div>This page does not exist</div>;
  console.log(state);
  return <>{state.isVerified ? successfull() : unSuccessfull()}</>;
}
