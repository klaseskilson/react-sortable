/** @jsx React.DOM */
var SortableListItem = React.createClass({
  mixins: [Sortable],
  render: function() {
    return (
      <li {...this.props} className={this.isDragging() ? "dragging" : ""}>{this.props.item}</li>
    );
  }
})
