import { Navigation } from "../../components";

// import { Input } from "../../ui";
// import { useForm, FormProvider } from "react-hook-form";

const WishListPage = () => {
  const methods = useForm()

  return (
    <section className="relative">
      <div className="sticky top-0 z-[100] bg-white">
        <Navigation />
      </div>
      <div className="p-4">
        <p>Wishlist Page: Still under construction</p>
        {/* <FormProvider {...methods}>
          <Input label="Name" name="name" placeholder="Name" />
        </FormProvider> */}
      </div>
    </section>
  );
};

export { WishListPage };
