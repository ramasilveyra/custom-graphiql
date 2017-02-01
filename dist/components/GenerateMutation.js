'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _desc, _value, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _graphiql = require('graphiql');

var _graphiql2 = _interopRequireDefault(_graphiql);

var _graphql = require('graphql');

var _coreDecorators = require('core-decorators');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _json2Mod = require('../helpers/json2-mod');

var _json2Mod2 = _interopRequireDefault(_json2Mod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var basicTypesDefaultValues = {
  Float: 0.0,
  ID: '',
  Int: 0,
  String: '',
  Boolean: false
};

var GenerateMutation = (_class = function (_Component) {
  (0, _inherits3.default)(GenerateMutation, _Component);

  function GenerateMutation(props) {
    (0, _classCallCheck3.default)(this, GenerateMutation);

    var _this = (0, _possibleConstructorReturn3.default)(this, (GenerateMutation.__proto__ || Object.getPrototypeOf(GenerateMutation)).call(this, props));

    _this.state = {
      showMutationsPopup: false,
      mutationSearchText: '',
      mutationSearchInputFocused: false
    };
    return _this;
  }

  (0, _createClass3.default)(GenerateMutation, [{
    key: 'isScalar',
    value: function isScalar(x) {
      return x === 'GraphQLScalarType';
    }
  }, {
    key: 'isEnum',
    value: function isEnum(x) {
      return x === 'GraphQLEnumType';
    }
  }, {
    key: 'isList',
    value: function isList(x) {
      return x === 'GraphQLList';
    }
  }, {
    key: 'isNonNull',
    value: function isNonNull(x) {
      return x === 'GraphQLNonNull';
    }
  }, {
    key: 'isObjectType',
    value: function isObjectType(x) {
      return x === 'GraphQLInputObjectType' || x === 'GraphQLObjectType';
    }
  }, {
    key: 'isUnionType',
    value: function isUnionType(x) {
      return x === 'GraphQLUnionType';
    }
  }, {
    key: 'generateInputObject',
    value: function generateInputObject(graphqlObject) {
      var _this2 = this;

      var type = graphqlObject.type;
      var typeConstructorName = type.constructor.name;
      var ofType = type.ofType;
      var ofTypeConstructorName = ofType ? ofType.constructor.name : '';

      if (this.isScalar(typeConstructorName)) {
        var defaultValue = basicTypesDefaultValues[type.name];
        return defaultValue === undefined ? null : defaultValue;
      }

      if (this.isScalar(ofTypeConstructorName)) {
        var _defaultValue = basicTypesDefaultValues[ofType.name];
        if (this.isList(typeConstructorName)) {
          return [_defaultValue === undefined ? null : _defaultValue];
        }
        return _defaultValue === undefined ? null : _defaultValue;
      }

      if (this.isEnum(typeConstructorName)) {
        return type.getValues()[0].value;
      }

      if (this.isEnum(ofTypeConstructorName)) {
        if (this.isList(typeConstructorName)) {
          return [ofType.getValues()[0].value];
        }
        return ofType.getValues()[0].value;
      }

      if (this.isObjectType(ofTypeConstructorName) || this.isObjectType(typeConstructorName)) {
        var _ret = function () {
          var fields = ofType ? ofType.getFields() : type.getFields();
          var fieldsInputObject = {};
          Object.keys(fields).forEach(function (fieldKey) {
            return fieldsInputObject[fieldKey] = _this2.generateInputObject(fields[fieldKey]);
          });
          if (_this2.isList(typeConstructorName)) {
            return {
              v: [fieldsInputObject]
            };
          }
          return {
            v: fieldsInputObject
          };
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
      }

      return '';
    }
  }, {
    key: 'getSubSelectionString',
    value: function getSubSelectionString(graphqlObject) {
      var _this3 = this;

      var type = graphqlObject.type;
      var typeConstructorName = type.constructor.name;
      var ofType = type.ofType;
      var ofTypeConstructorName = ofType ? ofType.constructor.name : '';

      if (this.isScalar(typeConstructorName) || this.isScalar(ofTypeConstructorName)) {
        return '';
      }

      if (this.isObjectType(ofTypeConstructorName) || this.isObjectType(typeConstructorName)) {
        var _ret2 = function () {
          var fields = ofType ? ofType.getFields() : type.getFields();
          if (Object.keys(fields).includes('id')) {
            return {
              v: '{ id }'
            };
          }

          var scalarKey = Object.keys(fields).find(function (fieldKey) {
            var fieldType = fields[fieldKey].type;
            var fieldTypeConstructorName = fieldType.constructor.name;
            var fieldOfType = fieldType.ofType;
            var fieldOfTypeConstructorName = fieldOfType ? fieldOfType.constructor.name : '';
            return _this3.isScalar(fieldTypeConstructorName) || _this3.isScalar(fieldOfTypeConstructorName);
          });
          if (scalarKey) {
            return {
              v: '{ ' + scalarKey + ' }'
            };
          }

          var complexFieldKey = Object.keys(fields).sort()[0];
          var complexField = fields[complexFieldKey];
          return {
            v: '{ ' + _this3.generateOutputObjectString(complexField) + ' }'
          };
        }();

        if ((typeof _ret2 === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret2)) === "object") return _ret2.v;
      }

      if (this.isUnionType(typeConstructorName) || this.isUnionType(ofTypeConstructorName)) {
        var unionTypes = this.isUnionType(typeConstructorName) ? type.getTypes() : ofType.getTypes();
        var subSelectionStringArray = unionTypes.map(function (item) {
          var wrapperObject = { type: item };
          var itemSubSelectionString = _this3.getSubSelectionString(wrapperObject);
          var unionTypeName = item.name;
          return '... on ' + unionTypeName + ' ' + itemSubSelectionString;
        });
        return '{ ' + subSelectionStringArray.join('\n') + ' }';
      }

      return '';
    }
  }, {
    key: 'generateOutputObjectString',
    value: function generateOutputObjectString(graphqlObject) {
      var _this4 = this;

      var args = graphqlObject.args;
      var argsStringArray = args.map(function (item) {
        var type = item.type;
        var typeConstructorName = type.constructor.name;
        var ofType = type.ofType;
        var ofTypeConstructorName = ofType ? ofType.constructor.name : '';

        var isBasicType = _this4.isScalar(typeConstructorName) || _this4.isScalar(ofTypeConstructorName);

        var valueObject = _this4.generateInputObject(item);
        var valueObjectString = isBasicType ? JSON.stringify(valueObject) : _json2Mod2.default.stringify(valueObject, null, '', true);
        return item.name + ': ' + valueObjectString;
      });
      var argsString = argsStringArray.join(',');
      if (argsString) {
        argsString = '(' + argsString + ')';
      }

      var subSelectionString = this.getSubSelectionString(graphqlObject);

      return graphqlObject.name + ' ' + argsString + ' ' + subSelectionString;
    }
  }, {
    key: 'mutationPressed',
    value: function mutationPressed(mutationName) {
      var _this5 = this;

      var mutationFields = this.props.schema.getMutationType().getFields();
      var mutation = mutationFields[mutationName];
      var mutationArgs = mutation.args;

      var queryVariables = [];
      var inputs = mutationArgs.map(function (mutationArg, index) {
        var type = mutationArg.type;
        var typeConstructorName = type.constructor.name;
        var ofType = type.ofType;
        var ofTypeConstructorName = ofType ? ofType.constructor.name : '';

        var isBasicType = _this5.isScalar(typeConstructorName) || _this5.isScalar(ofTypeConstructorName);
        var valueObject = _this5.generateInputObject(mutationArg);

        if (!isBasicType) {
          queryVariables.push({
            name: '$input_' + index,
            type: ofType ? ofType.name : type.name,
            value: valueObject
          });
        }

        var valueObjectString = isBasicType ? JSON.stringify(valueObject) : '$input_' + index;
        return mutationArg.name + ': ' + valueObjectString;
      });
      var inputString = inputs.join(',');
      if (inputString) {
        inputString = '(' + inputString + ')';
      }

      var mutationInputString = queryVariables.map(function (item) {
        return item.name + ': ' + item.type + '!';
      }).join(',');
      if (mutationInputString) {
        mutationInputString = '(' + mutationInputString + ')';
      }

      var queryVariablesObject = queryVariables.reduce(function (previousValue, currentValue) {
        previousValue[currentValue.name.slice(1)] = currentValue.value;
        return previousValue;
      }, {});

      var outputType = mutation.type;
      var outputOfType = outputType.ofType;
      var outputTypeConstructorName = outputType.constructor.name;
      var outputOfTypeConstructorName = outputOfType ? outputOfType.constructor.name : '';
      var isScalarOutputType = this.isScalar(outputTypeConstructorName) || this.isScalar(outputOfTypeConstructorName);
      var outputString = '';
      if (!isScalarOutputType) {
        (function () {
          var outputFields = outputType.getFields();
          var outputStrings = Object.keys(outputFields).map(function (fieldKey) {
            var outputField = outputFields[fieldKey];
            return '' + _this5.generateOutputObjectString(outputField);
          });
          outputString = '{ ' + outputStrings.join(',') + ' }';
        })();
      }

      var queryString = '\n      mutation ' + mutationName + 'Mutation' + mutationInputString + ' {\n        ' + mutationName + inputString + ' ' + outputString + '\n      }\n    ';
      var prettyQuery = (0, _graphql.print)((0, _graphql.parse)(queryString));
      var queryVariablesString = JSON.stringify(queryVariablesObject, null, '  ');

      this.setState({
        showMutationsPopup: false,
        mutationSearchText: ''
      });
      this.props.updateQueryVariablesResponse && this.props.updateQueryVariablesResponse(prettyQuery, queryVariablesString);
    }
  }, {
    key: 'generateMutationPressed',
    value: function generateMutationPressed() {
      this.setState({
        showMutationsPopup: !this.state.showMutationsPopup
      });
    }
  }, {
    key: 'renderMutations',
    value: function renderMutations() {
      var _this6 = this;

      if (!this.state.showMutationsPopup) {
        return null;
      }

      var mutation = this.props.schema.getMutationType();
      var mutationFields = mutation.getFields();

      var mutationSearchInputStyle = this.state.mutationSearchInputFocused ? _styles2.default.searchInputFocused : null;
      var mutationSearchText = (this.state.mutationSearchText || '').toLowerCase();

      return _react2.default.createElement(
        'div',
        { style: _styles2.default.popup },
        _react2.default.createElement('input', {
          onChange: function onChange(event) {
            return _this6.setState({ mutationSearchText: event.target.value });
          },
          style: Object.assign({}, _styles2.default.searchInput, mutationSearchInputStyle),
          type: 'text',
          placeholder: 'Find mutation...',
          onFocus: function onFocus() {
            return _this6.setState({ mutationSearchInputFocused: true });
          },
          onBlur: function onBlur() {
            return _this6.setState({ mutationSearchInputFocused: false });
          },
          autoFocus: true
        }),
        Object.keys(mutationFields).sort().filter(function (value) {
          return value.toLowerCase().includes(mutationSearchText);
        }).map(function (mutationName) {
          return _react2.default.createElement(
            'div',
            {
              key: mutationName,
              className: 'menuListButton',
              style: _styles2.default.menuListButton,
              onClick: function onClick() {
                return _this6.mutationPressed(mutationName);
              }
            },
            mutationName
          );
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var showGenerateMutation = this.props.schema && this.props.schema.getMutationType();
      if (!showGenerateMutation) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { style: _styles2.default.toolBarButtonWrapper },
        this.renderMutations(),
        _react2.default.createElement(_graphiql2.default.ToolbarButton, {
          title: 'Generate mutation query',
          label: 'Generate Mutation',
          onClick: this.generateMutationPressed
        })
      );
    }
  }]);
  return GenerateMutation;
}(_react.Component), (_applyDecoratedDescriptor(_class.prototype, 'mutationPressed', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'mutationPressed'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'generateMutationPressed', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'generateMutationPressed'), _class.prototype)), _class);
exports.default = GenerateMutation;