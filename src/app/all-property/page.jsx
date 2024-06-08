'use client';
 import { ComparePropertyProvider } from "@/context/ComparePropertyContext";

import AllProperty from "./allProperty";

const page = () => {
  return (
<ComparePropertyProvider>
  <AllProperty />
</ComparePropertyProvider>
  )
}

export default page
