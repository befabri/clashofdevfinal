import { useEffect } from "preact/hooks";

interface Props {
    title:string
}

export function PageTitle({title}:Props) {
    useEffect(() => {
      document.title = title;
    }, [title]);

    return null;
  }