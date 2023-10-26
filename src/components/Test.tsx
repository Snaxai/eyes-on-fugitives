
import { createAlova, useRequest } from 'alova';
import GlobalFetch from 'alova/GlobalFetch';
import ReactHook from 'alova/react';

// 1. Create an alova instance
const alovaInstance = createAlova({
  // ReactHook is used to create ref status, including request status loading, response data data, request error object error, etc.
  statesHook: ReactHook,

  // request adapter, it is recommended to use the fetch request adapter
  requestAdapter: GlobalFetch()
});


type Props = {

}

const Test = ({}: Props) => {
  return(
    <>
    HELLO REACT WORLD
    </>
  )
}

export default Test
