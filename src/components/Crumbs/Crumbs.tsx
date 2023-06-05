import { FC } from "react";
import { currentType } from "../../pages/Details/Details";
import "./index.scss";
import * as React from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06)
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12)
    }
  };
}) as typeof Chip;

interface CrumbsProps {
  goBack: () => void
  current: currentType,
}

const Crumbs: FC<CrumbsProps> = ({ goBack, current }) => {
  const { product, year, mark } = current;
  const navigate = useNavigate();
  return (
    <div className="crumbs">
      <div role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
          <StyledBreadcrumb
            component="a"
            label="Главная"
            icon={<HomeIcon fontSize="small" />}
            onClick={() => navigate("/")}
          />
          <StyledBreadcrumb component="a" label="Запчасти" onClick={goBack} />
          <StyledBreadcrumb
            label={`${product} ${mark} ${year}`}
            disabled={true}
          />
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default Crumbs;
