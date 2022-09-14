import type { GatsbyNode } from "gatsby"

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  getConfig,
  actions
}) => {
  if (getConfig().mode === "production") {
    actions.setWebpackConfig({
      devtool: false
    })
  }
}