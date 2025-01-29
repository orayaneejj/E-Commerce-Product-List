import { Navbar } from "../components/Navbar/Navbar";
import { Banner } from "../components/Banner/Banner";
import { ProductList } from "../components/ProductList/ProductList";
import { FilterSidebar } from "../components/FilterSidebar/FilterSidebar";
import { Grid, GridItem } from "@chakra-ui/react";
function LandingPage() {
  return (
    <>
      <Navbar />
      <Banner />
      <main className="products-section">
        <Grid templateColumns="repeat(3, 1fr)">
          <GridItem colSpan={1}>
            <FilterSidebar />
          </GridItem>
          <GridItem colSpan={2}>
            <ProductList />
          </GridItem>
        </Grid>
      </main>
    </>
  );
}
export default LandingPage;
