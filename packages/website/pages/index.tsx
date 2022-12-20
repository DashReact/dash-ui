import { Button } from '@dash-ui-lib/button';

export function Index() {
  return (
    <Button primary onClick={()=>console.log("clicked")}>
      testing
    </Button>
  );
}

export default Index;
