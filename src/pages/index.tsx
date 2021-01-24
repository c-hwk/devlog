import React, { useEffect } from 'react'
import { PageProps, Link, graphql } from "gatsby"
import SEO from "../components/seo"

import Layout from "../components/Layout.tsx"
import CategoryButton from '../components/CategoryButton.tsx'

import { Card, CardContent, CardHeader } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

type DataType = {
	[key: string]: any
}

const useStyles = makeStyles({
	root: {
		width: 240,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

const Index: React.FC<PageProps<DataType>> = ({
	data,
	location
}) => {

	const posts = data.allMarkdownRemark.nodes;
	const classes = useStyles();
	if (posts.length > 0) {
		return (
			<Layout location={location} title={'title'}>
				<SEO title="Apexcel" />
				{/* <ol style={{ listStyle: `none` }}> */}
					<div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>

					{posts.map((post, i) => {
						return (
							<Card key={i} className={classes.root}>
								<Link to={post.fields.slug} itemProp="url">
									<CardHeader title={`${post.frontmatter.title}`} subheader={`${post.frontmatter.date}`} />
								</Link>
								<CategoryButton title={post.frontmatter.category} />
								<CardContent>
									<p
										dangerouslySetInnerHTML={{
											__html: post.excerpt || post.frontmatter.description
										}}
										itemProp="description"
									/>
								</CardContent>
							</Card>
						)
					})}
					</div>
				{/* </ol> */}
			</Layout>
		)
	}

	return (
		<Layout location={location} title={'title'}>
			<SEO title="All posts" />
			<p>
				No blog posts found. Add markdown posts to "content/blog" (or the
				directory you specified for the "gatsby-source-filesystem" plugin in
				gatsby-config.js).
        </p>
		</Layout>
	)
}
export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          category
        }
      }
    }
  }
`