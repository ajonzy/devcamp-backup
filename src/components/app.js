import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"

import Home from "./home"
import Video from "./video"

export default class App extends Component {
  constructor() {
    super()

    this.state ={
      videosList: [
        {
          name: "Building the HTML Structure for the About Page Header",
          path: "C_01_about_page_heading_html_structure.mp4"
        },
        {
          name: "How to Skew Images in CSS",
          path: "C_02_css_image_skews.mp4"
        },
        {
          name: "Using the CSS Float Property to Have Text Flow Around an Image",
          path: "C_03_css_floats.mp4"
        },
        {
          name: "Using the CSS Float Property to Have Text Flow Around an Image",
          path: "C_04_about_page_square_grid_html_structure.mp4"
        },
        {
          name: "Creating a Two Column Layout with CSS Grid and Flexbox",
          path: "C_05_creating_two_column_grid_css_grid.mp4"
        },
        {
          name: "Finalizing the About Page Styles and Review of Code Organization Best Practices",
          path: "C_06_finalizing_about_page_code_organization_best_practices.mp4"
        },
        {
          name: "Populating the Menu Page with the Two Column Grid",
          path: "D_01_populating_menu_page_content_and_grid.mp4"
        },
        {
          name: "Guide to HTML Bullet Point and Numbered Lists",
          path: "D_02_html_bullet_point_and_numbered_lists.mp4"
        },
        {
          name: "How to Implement Anchor Tags in HTML",
          path: "D_03_html_anchor_links.mp4"
        },
        {
          name: "Overview of the Before and After Pseudo Selectors in CSS",
          path: "D_04_before_after_pseudo_selectors.mp4"
        },
        {
          name: "Creating the Initial Structure for the Contact Page",
          path: "E_01_html_structure_contact_page.mp4"
        },
        {
          name: "Building the Contact Page Layout with CSS Grid",
          path: "E_02_contact_page_grid_layout.mp4"
        },
        {
          name: "Introduction to HTML Form Elements",
          path: "E_03_introduction_html_forms.mp4"
        },
        {
          name: "How to Style Text Inputs with CSS",
          path: "E_04_styling_text_inputs.mp4"
        },
        {
          name: "Styling the Form Textarea and Button",
          path: "E_05_styling_textarea_and_button_fixed.mp4"
        },
        {
          name: "Building the Label and Form Element Drop Shadow Styles",
          path: "E_06_label_and_focus_drop_shadow_styles.mp4"
        },
        {
          name: "Integrating Custom Form Placeholder Text Styles",
          path: "E_07_custom_form_placeholder_styles.mp4"
        },
        {
          name: "How to Animate Form Labels",
          path: "E_08_animating_text_labels.mp4"
        },
        {
          name: "Finalizing Contact Page Styles",
          path: "E_09_finalizing_contact_page_styles.mp4"
        },
        {
          name: "Introduction to CSS Media Queries",
          path: "F_01_introduction_to_media_queries.mp4"
        },
        {
          name: "Finalizing the Homepage Responsive Styles",
          path: "F_02_finishing_responsive_layout_on_homepage.mp4"
        },
        {
          name: "Implementing Responsive Styles to the Square Grid, Image Skew, and Form Elements",
          path: "F_03_media_queries_to_square_grid_skew_and_form.mp4"
        }
      ]
    }
  }

  renderVideoRoutes() {
    const videosRoutes = []

    for (let i=0; i<this.state.videosList.length; i++) {
      videosRoutes.push(
        <Route key={i} path={`/video/${i + 1}`} render={(...props) => <Video {...props} key={i} video={this.state.videosList[i]} />}/>
      )
    }

    return videosRoutes
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={(...props) => <Home {...props} videos={this.state.videosList} />}/>
        {this.renderVideoRoutes()}
      </Switch>
    );
  }
}
