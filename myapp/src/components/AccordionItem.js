import React, { Component } from "react";

class AccordionItem extends Component {
  constructor(props) {
    super(props);

    if (props.item.expanded) {
      this.show = "show";
    } else {
      this.show = "";
    }
  }

  render() {
    return (
      <div className="card">
        <div className="card-header" id={this.props.item.headerId}>
          <h2 className="mb-0">
            <button
              className="btn btn-block text-left"
              type="button"
              data-toggle="collapse"
              data-target={"#collapse" + this.props.item.headerId}
              aria-expanded={this.props.item.expanded}
              aria-controls={"collapse" + this.props.item.headerId}
            >
              {this.props.item.question}
            </button>
          </h2>
        </div>
        <div
          id={"collapse" + this.props.item.headerId}
          className={"collapse " + this.show}
          aria-labelledby={this.props.item.headerId}
          data-parent="#accordion"
        >
          <div className="card-body">{this.props.item.answer}</div>
        </div>
      </div>
    );
  }
}

export default AccordionItem;
