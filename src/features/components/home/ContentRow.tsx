import { FC, memo } from "react";

type Props = {
  id: number;
  title: string;
  description: string;
  images: { id: number; path: string }[];
  thumbnail: string;
  route: string;
};

const ContentRow: FC<Props> = ({
  id,
  description,
  images,
  route,
  thumbnail,
  title,
}) => (
  <div className="row my-5 align-items-start">
    <div className="col-md-3 mx-auto overflow-hidden p-0 h-auto shadow w-auto">
      <a href={`${route}.html`}>
        <img
          src={require(`../../shared/img/${thumbnail}`)}
          className="img-fluid rounded hover-transform-z opacity-hover"
          alt={route}
        />
      </a>
    </div>
    <div className="ms-3 col-md">
      <h1 className="mt-3 mt-md-0 text-center text-md-start">{title}</h1>
      <p className="lead text-center text-md-start para">{description}</p>
    </div>
  </div>
);

export default memo<Props>(ContentRow);
