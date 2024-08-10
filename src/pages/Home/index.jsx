import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ProductsContent, Navegation, Button, PageCurrent } from "./styled";

import { Select } from "../../slices/apiSlice";

import Loading from "../../components/Loading";
import Product from "../../components/Product";

const Home = ({ data, setData }) => {
  const { result, loading } = useSelector(state => state.api);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Select(data));
  }, [dispatch, data]);

  const handleBackPage = () => {
    const offSet = data.offset >= 0 ? data.offset - 1 : data.offset;

    setData((prevState) => ({
      ...prevState,
      offset: offSet,
    }));
  }

  const handleNextPage = () => {
    const offSet = data.offset <= result.paging.primary_results ? data.offset + 1 : data.offset;

    setData((prevState) => ({
      ...prevState,
      offset: offSet,
    }));
  }

  return (
    <>
      <ProductsContent style={loading ? {alignItems: "center"} : {alignItems: "stretch"}} >
        {loading ? (
          <Loading size={50} />
        ) : (
          result.results.map(product => (
            <Product key={product.id} data={product} />
          ))
        )}
      </ProductsContent>
      {!loading && (
        <Navegation>
          <Button onClick={handleBackPage}>&lt; Anterior</Button>
          <PageCurrent>{!loading && result.paging.offset + 1}</PageCurrent>
          <Button onClick={handleNextPage}>&lt; Seguinte</Button>
        </Navegation>
      )}
    </>
  );
}

export default Home;
