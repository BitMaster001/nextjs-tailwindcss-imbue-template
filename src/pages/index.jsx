import Button from "components/common/Button";
import Text from "components/common/Text";
import Page from "components/layout/Page";
import Form, { FormContainer } from "../components/common/Form";

const Index = () => {

  const handleOnBack = () => null;

  return (
    <Page>
      <Form>
        <FormContainer className="bg-greyDark">
          <Text size={"lg"}>Describe the project you are envisioning.</Text>
          <Text size={"sm"}>This is how imbuers figure out what you need and why you’re great to work with!</Text>
        </FormContainer>
        <FormContainer className="bg-greyLight">
          <Button label="Back" variant="secondary" isRounded={true} onClick={handleOnBack} />
          <Button label="Next: Skills" variant="primary" isRounded={true} onClick={handleOnBack} />
        </FormContainer>
      </Form>
    </Page>
  );
};

export default Index;
