var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * GemAsset Model
 * ==========
 */
var GemAsset = new keystone.List('GemAsset', {
  autokey: { path: 'slug', from: 'title', unique: true },
  map: { name: 'title' },
  defaultSort: '-createdAt'
});

// GemAsset.add({
//   title: { type: String, required: true },
//   state: { type: Types.Select, options: 'draft, published, archived', default: 'draft' },
//   author: { type: Types.Relationship, ref: 'User' },
//   createdAt: { type: Date, default: Date.now },
//   publishedAt: Date,
//   image: { type: Types.CloudinaryImage },
//   content: {
//     brief: { type: Types.Html, wysiwyg: true, height: 150 },
//     extended: { type: Types.Html, wysiwyg: true, height: 400 }
//   }
// })

GemAsset.register();


